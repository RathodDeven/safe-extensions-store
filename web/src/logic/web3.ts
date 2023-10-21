import { AbstractProvider, ethers } from "ethers";
import { getSafeAppsProvider, isConnectedToSafe } from "./safeapp";
import { PROTOCOL_PUBLIC_RPC } from "./constants";

export const getProvider = async (): Promise<AbstractProvider> => {
  // if (await isConnectedToSafe()) {
  //   console.log("Use SafeAppsProvider");
  //   return await getSafeAppsProvider();
  // }
  console.log("Use JsonRpcProvider");
  return new ethers.JsonRpcProvider(PROTOCOL_PUBLIC_RPC);
};

export const getJsonProvider = async (): Promise<AbstractProvider> => {
  return new ethers.JsonRpcProvider(PROTOCOL_PUBLIC_RPC);
};

export const getSafeSigner = async (): Promise<ethers.Signer | null> => {
  const provider = await getSafeAppsProvider();
  if (!provider) return null;
  return provider?.getSigner();
};

export const getConnectedProvider = async (): Promise<
  ethers.BrowserProvider | undefined
> => {
  if (await isConnectedToSafe()) {
    console.log("Use SafeAppsProvider");
    return await getSafeAppsProvider();
  }

  console.log("Use Web3Provider");

  // @ts-ignore
  if (window?.ethereum) {
    // @ts-ignore
    const provider = new ethers.BrowserProvider(window.ethereum, {
      chainId: 84531,
      name: "Base Goerli",
    });

    return provider;
  }
};

export const getConnectedSigner = async (): Promise<ethers.Signer | null> => {
  if (!(await isConnectedToSafe())) {
    // @ts-ignore
    if (window?.ethereum) {
      // connect to metamask
      // @ts-ignore
      await window.ethereum.request({ method: "eth_requestAccounts" });
    }
  }

  const provider = await getConnectedProvider();
  if (!provider) return null;
  return provider?.getSigner();
};
