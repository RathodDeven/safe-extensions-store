import { ethers } from "ethers";
import { BaseTransaction } from "@safe-global/safe-apps-sdk";
import { PluginMetadata, loadPluginMetadata } from "./metadata";
import {
  getManager,
  getPlugin,
  getRegistry,
  getRegistryFromConnectedProvider,
  // getRegistryFromJsonProvider,
} from "./protocol";
import { getSafeInfo, isConnectedToSafe, submitTxs } from "./safeapp";
import { isModuleEnabled, buildEnableModule } from "./safe";
import { getBrowserSigner, getConnectedSigner, getSafeSigner } from "./web3";
import { ZERO_ADDRESS } from "./constants";

const SENTINEL_MODULES = "0x0000000000000000000000000000000000000001";

type EventLog = ethers.providers.Log;

export interface PluginDetails {
  metadata: PluginMetadata;
  enabled?: boolean;
}

export const loadPluginDetails = async (
  pluginAddress: string
): Promise<PluginDetails> => {
  const plugin = await getPlugin(pluginAddress);
  const metadata = await loadPluginMetadata(plugin);
  if (!(await isConnectedToSafe())) return { metadata };
  const enabled = await isPluginEnabled(pluginAddress);
  return { metadata, enabled };
};

export const loadPluginsOfIntegrations = async (
  filterFlagged: boolean = true
): Promise<string[]> => {
  const registry = await getRegistry();
  // const registry = await getRegistryFromJsonProvider();
  const addedEvents = (await registry.queryFilter(
    // @ts-ignore
    registry.filters.IntegrationAdded,
    11218388,
    "latest"
  )) as ethers.providers.Log[];

  const addedModules = addedEvents.map(
    // @ts-ignore
    (event: EventLog) => event.args.integration
  );

  if (!filterFlagged) return addedModules;
  const flaggedEvents = (await registry.queryFilter(
    //@ts-ignore
    registry.filters.IntegrationFlagged,
    11130728
  )) as EventLog[];

  const flaggedModules = flaggedEvents.map(
    // @ts-ignore
    (event: EventLog) => event.args.integration
  );

  return addedModules.filter((module) => flaggedModules.indexOf(module) < 0);
};

export const loadPlugins = async (
  filterFlagged: boolean = true
): Promise<string[]> => {
  const registry = await getRegistry();
  // const registry = await getRegistryFromJsonProvider();
  const addedEvents = (await registry.queryFilter(
    // @ts-ignore
    "ModuleAdded",
    11130728,
    "latest"
  )) as EventLog[];

  // @ts-ignore
  const addedModules = addedEvents.map((event: EventLog) => event.args.module);

  if (!filterFlagged) return addedModules;
  const flaggedEvents = (await registry.queryFilter(
    // @ts-ignore
    "ModuleFlagged",
    11130728
  )) as EventLog[];

  const flaggedModules = flaggedEvents.map(
    // @ts-ignore
    (event: EventLog) => event.args.module
  );

  return addedModules.filter((module) => flaggedModules.indexOf(module) < 0);
};

export const loadFlaggedPlugins = async (): Promise<string[]> => {
  const registry = await getRegistry();
  // const registry = await getRegistryFromJsonProvider();
  const flaggedEvents = (await registry.queryFilter(
    // @ts-ignore
    "ModuleFlagged",
    11130728
  )) as EventLog[];

  // @ts-ignore
  return flaggedEvents.map((event: EventLog) => event.args.module);
};

export const isPluginEnabled = async (plugin: string) => {
  if (!(await isConnectedToSafe())) throw Error("Not connected to a Safe");
  const manager = await getManager();
  const safeInfo = await getSafeInfo();
  const pluginInfo = await manager.enabledPlugins(safeInfo.safeAddress, plugin);
  return pluginInfo.nextPluginPointer !== ZERO_ADDRESS;
};

export const loadEnabledPlugins = async (): Promise<string[]> => {
  if (!(await isConnectedToSafe())) throw Error("Not connected to a Safe");
  const manager = await getManager();
  const safeInfo = await getSafeInfo();
  const paginatedPlugins = await manager.getPluginsPaginated(
    SENTINEL_MODULES,
    10,
    safeInfo.safeAddress
  );
  return paginatedPlugins.array;
};

const buildEnablePlugin = async (
  plugin: string,
  requiredPermissions: BigInt
): Promise<BaseTransaction> => {
  const manager = await getManager();
  const tx = {
    to: manager.address,
    value: "0",
    data: (
      await manager.enablePlugin.populateTransaction(
        plugin,
        requiredPermissions
      )
    ).data,
  };

  return tx;
};

export const deployPlugin = async ({
  abi,
  bytecode,
  name = "",
  version = "1.0.0",
  requiredPermissions = 0,
  iconUrl = "",
  appUrl = "",
  description = "",
  category = "",
  ssUrls = [],
}: {
  abi: string;
  bytecode: string;
  name?: string;
  version?: string;
  requiredPermissions?: number;
  iconUrl?: string;
  appUrl?: string;
  description?: string;
  category?: string;
  ssUrls?: string[];
}): Promise<string> => {
  const signer = await getBrowserSigner();
  if (!signer) throw Error("No signer found");
  const factory = new ethers.ContractFactory(abi, bytecode, signer);
  const contract = await factory.deploy(
    name,
    version,
    requiredPermissions,
    iconUrl,
    appUrl,
    description,
    category,
    ssUrls
  );
  await contract.waitForDeployment();
  const pluginAddress = contract.address;

  return pluginAddress;
};

const buildAddModule = async (
  module: string,
  moduleType: number
): Promise<BaseTransaction> => {
  const registry = await getRegistry();
  const tx = {
    to: registry.address,
    value: "0",
    data: (await registry.addModule.populateTransaction(module, moduleType))
      .data,
  };
  return tx;
};

export const addPlugin = async (pluginAddress: string) => {
  if (await isConnectedToSafe()) {
    const txs: BaseTransaction[] = [];

    // 1 is for plugins
    const addModuleTx = await buildAddModule(pluginAddress, 1);
    txs.push(addModuleTx);

    await submitTxs(txs);

    return pluginAddress;
  }

  // assuming connected to metamask
  const registry = await getRegistryFromConnectedProvider();
  const tx = await registry.addModule(pluginAddress, 1);

  // wait for the transaction to be mined
  await tx.wait();

  return pluginAddress;
};

const buildFlagModule = async (pluginAddress: string) => {
  const registry = await getRegistry();
  const tx = {
    to: registry.address,
    value: "0",
    data: (await registry.flagModule.populateTransaction(pluginAddress)).data,
  };
  return tx;
};

export const flagPlugin = async (pluginAddress: string): Promise<string> => {
  if (await isConnectedToSafe()) {
    const txs: BaseTransaction[] = [];

    // 1 is for plugins
    const flagModuleTx = await buildFlagModule(pluginAddress);
    txs.push(flagModuleTx);

    await submitTxs(txs);

    return pluginAddress;
  }

  // assuming connected to metamask
  const registryMetamask = await getRegistryFromConnectedProvider();
  const tx = await registryMetamask.flagModule(pluginAddress);

  await tx.wait();

  return pluginAddress;
};

export const enablePlugin = async (
  plugin: string,
  requiredPermissions: BigInt
) => {
  if (!(await isConnectedToSafe())) throw Error("Not connected to a Safe");
  const manager = await getManager();
  const managerAddress = manager.address;
  const info = await getSafeInfo();
  const txs: BaseTransaction[] = [];
  if (!(await isModuleEnabled(info.safeAddress, managerAddress))) {
    txs.push(await buildEnableModule(info.safeAddress, managerAddress));
  }
  if (!(await isPluginEnabled(plugin))) {
    txs.push(await buildEnablePlugin(plugin, requiredPermissions));
  }
  if (txs.length === 0) return;
  await submitTxs(txs);
};

// const buildEnablePlugin = async (
//   plugin: string,
//   requiresRootAccess: boolean
// ): Promise<BaseTransaction> => {
//   const manager = await getManager();
//   const tx = {
//     to: await manager.getAddress(),
//     value: "0",
//     data: (
//       await manager.enablePlugin.populateTransaction(plugin, requiresRootAccess)
//     ).data,
//   };

//   console.log("buildEnablePlugin tx", tx);
//   return tx;
// };

// export const enablePlugin = async (
//   plugin: string,
//   requiresRootAccess: boolean
// ) => {
//   if (!(await isConnectedToSafe())) throw Error("Not connected to a Safe");
//   const manager = await getManager();
//   const managerAddress = await manager.getAddress();
//   const info = await getSafeInfo();
//   const txs: BaseTransaction[] = [];
//   if (!(await isModuleEnabled(info.safeAddress, managerAddress))) {
//     txs.push(await buildEnableModule(info.safeAddress, managerAddress));
//   }
//   if (!(await isPluginEnabled(plugin))) {
//     txs.push(await buildEnablePlugin(plugin, requiresRootAccess));
//   }
//   if (txs.length === 0) return;
//   await submitTxs(txs);
// };

const buildDisablePlugin = async (
  pointer: string,
  plugin: string
): Promise<BaseTransaction> => {
  const manager = await getManager();
  return {
    to: manager.address,
    value: "0",
    data: (await manager.disablePlugin.populateTransaction(pointer, plugin))
      .data,
  };
};

export const disablePlugin = async (plugin: string) => {
  if (!(await isConnectedToSafe())) throw Error("Not connected to a Safe");
  const manager = await getManager();
  const txs: BaseTransaction[] = [];
  const enabledPlugins = await loadEnabledPlugins();
  const index = enabledPlugins.indexOf(plugin);
  // Plugin is not enabled
  if (index < 0) return;
  // If the plugin is not the first element in the linked list use previous element as pointer
  // Otherwise use sentinel as pointer
  const pointer = index > 0 ? enabledPlugins[index - 1] : SENTINEL_MODULES;
  await submitTxs([await buildDisablePlugin(pointer, plugin)]);
};
