import { Signer } from "ethers";
import { createContext, useContext, useState } from "react";
import React from "react";
import { getConnectedSigner } from "../../logic/web3";
import { getRegistry } from "../../logic/protocol";

/* eslint-disable */
interface ContextType {
  signer: Signer | null;
  address: string;
  isOwnerOfRegistry: boolean;
}

export const UserContext = createContext<ContextType>({
  signer: null,
  address: "",
  isOwnerOfRegistry: false,
});

const UserProvider = ({ children }: { children: any }) => {
  const [signer, setSigner] = useState<Signer | null>(null);
  const [address, setAddress] = useState<string>("");
  const [isOwnerOfRegistry, setIsOwnerOfRegistry] = useState<boolean>(false);

  React.useEffect(() => {
    const fetchData = async () => {
      // if connect to
      const signer = await getConnectedSigner();
      if (!signer) return;

      setSigner(signer);
      const addr = await signer.getAddress();
      setAddress(addr);
      const registry = await getRegistry();
      const owner = await registry.owner();

      if (owner.toLowerCase() === (await signer.getAddress()).toLowerCase()) {
        setIsOwnerOfRegistry(true);
      } else {
        setIsOwnerOfRegistry(false);
      }
    };
    fetchData();
  }, []);

  console.log("isOwnerOfRegistry", isOwnerOfRegistry);
  console.log("address", address);
  return (
    <UserContext.Provider
      value={{
        signer,
        address,
        isOwnerOfRegistry,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
export const useUser = () => useContext(UserContext);
