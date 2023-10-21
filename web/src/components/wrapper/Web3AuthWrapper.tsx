import React, { createContext, useState, useEffect } from "react";
import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
  UserInfo,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { Web3AuthOptions } from "@web3auth/modal";
import { EthHashInfo } from "@safe-global/safe-react-components";
import { Web3AuthModalPack, AuthKitSignInData } from "@safe-global/auth-kit";
import {
  PROTOCOL_CHAIN_ID,
  PROTOCOL_PUBLIC_RPC,
  TX_SERVICE_URL,
} from "../../logic/constants";

const connectedHandler = (data: any) => console.log("CONNECTED", data);
const disconnectedHandler = (data: any) => console.log("DISCONNECTED", data);

// Define the context type
type MyContextType = {
  web3AuthModalPack?: Web3AuthModalPack;
  safeAuthSignInResponse?: AuthKitSignInData | null;
  userInfo?: Partial<UserInfo>;
  provider?: SafeEventEmitterProvider | null;
  login?: () => void;
  logout?: () => void;
};

// Create the context
export const MyContext = createContext<MyContextType>({
  web3AuthModalPack: undefined,
  safeAuthSignInResponse: null,
  userInfo: undefined,
  provider: null,
  login: undefined,
  logout: undefined,
});

// Create the provider component
export const Web3AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState("");

  const [web3AuthModalPack, setWeb3AuthModalPack] =
    useState<Web3AuthModalPack>();
  const [safeAuthSignInResponse, setSafeAuthSignInResponse] =
    useState<AuthKitSignInData | null>(null);
  const [userInfo, setUserInfo] = useState<Partial<UserInfo>>();
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const options: Web3AuthOptions = {
        clientId: process.env.WEB3AUTH_CLIENT_ID || "",
        web3AuthNetwork: "testnet",
        chainConfig: {
          chainNamespace: CHAIN_NAMESPACES.EIP155,
          chainId: PROTOCOL_CHAIN_ID,
          rpcTarget: PROTOCOL_PUBLIC_RPC,
        },
        uiConfig: {
          theme: "dark",
          loginMethodsOrder: ["google", "facebook"],
        },
      };

      const modalConfig = {
        [WALLET_ADAPTERS.TORUS_EVM]: {
          label: "torus",
          showOnModal: false,
        },
        [WALLET_ADAPTERS.METAMASK]: {
          label: "metamask",
          showOnDesktop: true,
          showOnMobile: false,
        },
      };

      const openloginAdapter = new OpenloginAdapter({
        loginSettings: {
          mfaLevel: "mandatory",
        },
        adapterSettings: {
          uxMode: "popup",
          whiteLabel: {
            name: "Safe",
          },
        },
      });

      const web3AuthModalPack = new Web3AuthModalPack({
        txServiceUrl: TX_SERVICE_URL,
      });

      await web3AuthModalPack.init({
        options,
        adapters: [openloginAdapter],
        modalConfig,
      });

      web3AuthModalPack.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler);

      web3AuthModalPack.subscribe(
        ADAPTER_EVENTS.DISCONNECTED,
        disconnectedHandler
      );

      setWeb3AuthModalPack(web3AuthModalPack);

      return () => {
        web3AuthModalPack.unsubscribe(
          ADAPTER_EVENTS.CONNECTED,
          connectedHandler
        );
        web3AuthModalPack.unsubscribe(
          ADAPTER_EVENTS.DISCONNECTED,
          disconnectedHandler
        );
      };
    })();
  }, []);

  useEffect(() => {
    if (web3AuthModalPack && web3AuthModalPack.getProvider()) {
      (async () => {
        await login();
      })();
    }
  }, [web3AuthModalPack]);

  const login = async () => {
    if (!web3AuthModalPack) return;

    const signInInfo = await web3AuthModalPack.signIn();
    console.log("SIGN IN RESPONSE: ", signInInfo);

    const userInfo = await web3AuthModalPack.getUserInfo();
    console.log("USER INFO: ", userInfo);

    setSafeAuthSignInResponse(signInInfo);
    setUserInfo(userInfo || undefined);
    setProvider(web3AuthModalPack.getProvider() as SafeEventEmitterProvider);
  };

  const logout = async () => {
    if (!web3AuthModalPack) return;

    await web3AuthModalPack.signOut();

    setProvider(null);
    setSafeAuthSignInResponse(null);
  };

  return (
    <MyContext.Provider
      value={{
        web3AuthModalPack,
        safeAuthSignInResponse,
        userInfo,
        provider,
        login,
        logout,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

// use hook
export const useWeb3Auth = () => React.useContext(MyContext);
