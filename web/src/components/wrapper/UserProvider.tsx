import { Signer } from "ethers";
import { createContext, useContext, useState } from "react";
import React from "react";
import { getConnectedSigner } from "../../logic/web3";
import { getRegistry } from "../../logic/protocol";
import { Database } from "@tableland/sdk";

/* eslint-disable */
interface ContextType {
  signer: Signer | null;
  address: string;
  isOwnerOfRegistry: boolean;
  db?: Database<ReviewTableScheme>;
}

export const UserContext = createContext<ContextType>({
  signer: null,
  address: "",
  isOwnerOfRegistry: false,
  db: undefined,
});

export interface ReviewTableScheme {
  id: number;
  review: string;
  plugin_address: string;
  ratings: number;
  author: string;
  timestamp: number;
}

const UserProvider = ({ children }: { children: any }) => {
  const [signer, setSigner] = useState<Signer | null>(null);
  const [address, setAddress] = useState<string>("");
  const [isOwnerOfRegistry, setIsOwnerOfRegistry] = useState<boolean>(false);
  const [database, setDatabase] = useState<Database>();

  React.useEffect(() => {
    const fetchData = async () => {
      // if connect to
      const signer = await getConnectedSigner();
      if (!signer) return;

      // @ts-ignore
      const db: Database<ReviewTableScheme> = new Database(signer);
      db.config.autoWait = false;
      setDatabase(db);

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

  return (
    <UserContext.Provider
      value={{
        signer,
        address,
        isOwnerOfRegistry,
        db: database,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
export const useUser = () => useContext(UserContext);
