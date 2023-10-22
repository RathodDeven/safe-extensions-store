import { ethers } from "ethers";
import { getSafeAppsProvider, isConnectedToSafe } from "./safeapp";
import { PROTOCOL_PUBLIC_RPC } from "./constants";

export const getProvider = async (): Promise<ethers.providers.Provider> => {
  // if (await isConnectedToSafe()) {
  //   console.log("Use SafeAppsProvider");
  //   return await getSafeAppsProvider();
  // }
  return new ethers.providers.JsonRpcProvider(PROTOCOL_PUBLIC_RPC);
};

export const getJsonProvider = async (): Promise<ethers.providers.Provider> => {
  return new ethers.providers.JsonRpcProvider(PROTOCOL_PUBLIC_RPC);
};

export const getSafeSigner = async (): Promise<ethers.Signer | null> => {
  const provider = await getSafeAppsProvider();
  if (!provider) return null;
  return provider?.getSigner();
};

export const getConnectedProvider = async (): Promise<
  ethers.providers.Web3Provider | undefined
> => {
  if (await isConnectedToSafe()) {
    return await getSafeAppsProvider();
  }

  // @ts-ignore
  if (window?.ethereum) {
    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, {
      chainId: 84531,
      name: "Base Goerli",
    });

    return provider;
  }
};

export const getConnectedSigner = async (): Promise<ethers.Signer | null> => {
  try {
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
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const getBrowserSigner = async (): Promise<ethers.Signer | null> => {
  // @ts-ignore
  if (!window?.ethereum) return null;

  // @ts-ignore
  // connect to metamask
  // @ts-ignore
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // @ts-ignore
  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum, {
    chainId: 84531,
    name: "Base Goerli",
  });

  return provider?.getSigner();
};
