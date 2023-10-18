import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { publicFileUrl } from "../logic/utils";
const Header = () => {
  const { pathname } = useLocation();
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
    </header>
  );
};

export default Header;
