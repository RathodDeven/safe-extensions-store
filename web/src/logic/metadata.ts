import { ethers } from "ethers";
import { getMetadataProvider } from "./protocol";
import { getProvider } from "./web3";
import { defaultAbiCoder } from "ethers/lib/utils";

const AbiCoder = ethers.utils.AbiCoder;
const Contract = ethers.Contract;
const Interface = ethers.utils.Interface;
const isHexString = ethers.utils.isHexString;
const keccak256 = ethers.utils.keccak256;
const getAddress = ethers.utils.getAddress;

type ContractType = InstanceType<typeof ethers.Contract>;

// export interface PluginMetadata {
//   name: string;
//   version: string;
//   requiresRootAccess: boolean;
//   iconUrl: string;
//   appUrl: string;
//   description: string;
//   category: string;
// }

export interface PluginMetadata {
  name: string;
  version: string;
  requiredPermissions: BigInt;
  iconUrl: string;
  appUrl: string;
  description: string;
  category: string;
  ssUrls: string[];
}

// const ProviderType_IPFS = BigInt(0);
// const ProviderType_URL = BigInt(1);
const ProviderType_Contract = 2;
const ProviderType_Event = 3;

const MetadataEvent: string[] = [
  "event Metadata(bytes32 indexed metadataHash, bytes data)",
];
// const PluginMetadataType: string[] = [
//   "string name",
//   "string version",
//   "bool requiresRootAccess",
//   "string iconUrl",
//   "string appUrl",
//   "string description",
//   "string category",
// ];

const PluginMetadataType: string[] = [
  "string name",
  "string version",
  "uint8 requiredPermissions",
  "string iconUrl",
  "string appUrl",
  "string description",
  "string category",
  "string[] ssUrls",
];

const loadPluginMetadataFromContract = async (
  provider: string,
  metadataHash: string
): Promise<string> => {
  const providerInstance = await getMetadataProvider(provider);
  return await providerInstance.retrieveMetadata(metadataHash);
};

const loadPluginMetadataFromEvent = async (
  provider: string,
  metadataHash: string
): Promise<string> => {
  const web3Provider = await getProvider();
  const eventInterface = new Interface(MetadataEvent);
  const events = await web3Provider.getLogs({
    fromBlock: 11162991,
    toBlock: "latest",
    address: provider,
    topics: eventInterface.encodeFilterTopics("Metadata", [metadataHash]),
  });
  if (events.length === 0) throw Error("Metadata not found");
  const metadataEvent = events[events.length - 1];
  const decodedEvent = eventInterface.decodeEventLog(
    "Metadata",
    metadataEvent.data,
    metadataEvent.topics
  );
  return decodedEvent.data;
};

const loadRawMetadata = async (
  plugin: ContractType,
  metadataHash: string
): Promise<string> => {
  const [type, source] = await plugin.metadataProvider();

  if (ProviderType_Contract === Number(type)) {
    return loadPluginMetadataFromContract(
      defaultAbiCoder.decode(["address"], source)[0],
      metadataHash
    );
  } else if (ProviderType_Event === Number(type)) {
    return loadPluginMetadataFromEvent(
      defaultAbiCoder.decode(["address"], source)[0],
      metadataHash
    );
  } else {
    throw Error("Unsupported MetadataProviderType");
  }
  // switch (type) {
  //   case ethers.BigNumber.from(ProviderType_Contract):
  //     return loadPluginMetadataFromContract(
  //       defaultAbiCoder.decode(["address"], source)[0],
  //       metadataHash
  //     );
  //   case ethers.BigNumber.from(ProviderType_Event):
  //     return loadPluginMetadataFromEvent(
  //       defaultAbiCoder.decode(["address"], source)[0],
  //       metadataHash
  //     );
  //   default:
  //     throw Error("Unsupported MetadataProviderType");
  // }
};

const parseAppUrl = (rawUrl: string, pluginAddress: string | undefined) => {
  // Check if URL contain template for plugin address
  let parsedUrl = rawUrl;
  if (rawUrl.indexOf("${plugin}") >= 0) {
    // This will throw if no address is provided, but that is ok for now
    const address = getAddress(pluginAddress!!);
    parsedUrl = parsedUrl.replaceAll("${plugin}", address);
  }
  return parsedUrl;
};

export const decodePluginMetadata = (
  data: string,
  pluginAddress?: string
): PluginMetadata => {
  if (!isHexString(data)) throw Error("Invalid data format");
  const format = data.slice(2, 6);
  if (format !== "0000") throw Error("Unsupported format or format version");
  const metadata = data.slice(6);
  const decoded = defaultAbiCoder.decode(PluginMetadataType, "0x" + metadata);

  // return {
  //   name: decoded[0],
  //   version: decoded[1],
  //   requiresRootAccess: decoded[2],
  //   iconUrl: decoded[3],
  //   appUrl: parseAppUrl(decoded[4], pluginAddress),
  //   description: decoded[5],
  //   category: decoded[6],
  // };

  return {
    name: decoded[0],
    version: decoded[1],
    requiredPermissions: decoded[2],
    iconUrl: decoded[3],
    appUrl: parseAppUrl(decoded[4], pluginAddress),
    description: decoded[5],
    category: decoded[6],
    ssUrls: decoded[7],
  };
};

export const loadPluginMetadata = async (
  plugin: ContractType
): Promise<PluginMetadata> => {
  const metadataHash = await plugin.metadataHash();

  const metadata = await loadRawMetadata(plugin, metadataHash);
  if (metadataHash !== keccak256(metadata))
    throw Error("Invalid metadata retrieved!");
  return decodePluginMetadata(metadata, plugin.address);
};
