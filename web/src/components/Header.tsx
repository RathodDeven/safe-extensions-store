import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { publicFileUrl } from "../logic/utils";
import { getConnectedSigner } from "../logic/web3";
import { Signer } from "ethers";
const Header = () => {
  const { pathname } = useLocation();
  const [signer, setSigner] = useState<Signer | null>(null);
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      // if connect to
      const signer = await getConnectedSigner();
      if (!signer) return;
      const addr = await signer.getAddress();
      setAddress(addr);
      setSigner(signer);
    };
    fetchData();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 py-3 px-32 backdrop-blur-sm flex flex-row justify-between items-center">
      <div className="flex flex-row items-center space-x-8">
        <div className="flex flex-row items-center">
          <img src={publicFileUrl("/logo.png")} alt="logo" className="h-8" />
          <span className="text-2xl font-bold ml-4">Safe Store</span>
        </div>

        <Link
          to="/"
          className={clsx(
            "text-lg font-medium ",
            pathname === "/" ? "text-p-text" : "text-s-text"
          )}
        >
          <div>Discover</div>
        </Link>

        <Link
          to="/installed"
          className={clsx(
            "text-lg font-medium ",
            pathname === "/installed" ? "text-p-text" : "text-s-text"
          )}
        >
          <div>Installed</div>
        </Link>
      </div>

      <div className="flex flex-row items-center space-x-8">
        <Link
          to="/add-plugin"
          className={clsx(
            "text-lg font-medium hover:text-p-text transition-all duration-300",
            pathname === "/add-plugin" ? "text-p-text" : "text-s-text"
          )}
        >
          <div>Add Plugin</div>
        </Link>

        {address && (
          <div className="text-s-text font-semibold text-lg">
            {address.slice(0, 6)}...{address.slice(-4)}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
