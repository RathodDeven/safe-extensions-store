import { ethers } from "ethers";
import { getConnectedSigner, getJsonProvider, getProvider } from "./web3";
import { deployedContracts } from "./contract-info/deployment";
import { PROTOCOL_CHAIN_ID } from "./constants";
const { Interface } = ethers.utils;

const Metadata_PROVIDER_ABI = [
  "function retrieveMetadata(bytes32 metadataHash) external view returns (bytes metadata)",
];

const PLUGIN_ABI = [
  "function metadataHash() public view returns (bytes32 metadataHash)",
  "function metadataProvider() external view returns (uint256 providerType, bytes location)",
];

export const getManager = async () => {
  const provider = await getProvider();
  const registryInfo =
    deployedContracts[PROTOCOL_CHAIN_ID][0].contracts.TestSafeProtocolManager;
  return new ethers.Contract(registryInfo.address, registryInfo.abi, provider);
};

export const getRegistryFromJsonProvider = async () => {
  const provider = await getJsonProvider();
  const registryInfo =
    deployedContracts[PROTOCOL_CHAIN_ID][0].contracts
      .TestSafeProtocolRegistryUnrestricted;
  return new ethers.Contract(registryInfo.address, registryInfo.abi, provider);
};

export const getRegistryFromConnectedProvider = async () => {
  const signer = await getConnectedSigner();
  if (!signer) throw new Error("No signer");
  const registryInfo =
    deployedContracts[PROTOCOL_CHAIN_ID][0].contracts
      .TestSafeProtocolRegistryUnrestricted;
  return new ethers.Contract(registryInfo.address, registryInfo.abi, signer);
};

export const getRegistry = async () => {
  const provider = await getProvider();
  const registryInfo =
    deployedContracts[PROTOCOL_CHAIN_ID][0].contracts
      .TestSafeProtocolRegistryUnrestricted;
  return new ethers.Contract(registryInfo.address, registryInfo.abi, provider);
};

export const getPlugin = async (pluginAddress: string) => {
  // const provider = await getProvider();
  const provider = await getJsonProvider();
  console.log(new Interface(PLUGIN_ABI));
  return new ethers.Contract(pluginAddress, PLUGIN_ABI, provider);
};

export const getMetadataProvider = async (providerAddress: string) => {
  const provider = await getProvider();
  return new ethers.Contract(providerAddress, Metadata_PROVIDER_ABI, provider);
};
