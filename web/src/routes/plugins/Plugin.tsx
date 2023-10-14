import { FunctionComponent } from "react";
import * as blockies from "blockies-ts";
import "./Plugins.css";

import { Link } from "react-router-dom";
import { usePluginDetails } from "../../hooks/usePluginDetails";

export type PluginProps = {
  address: string;
};

export const Plugin: FunctionComponent<PluginProps> = ({ address }) => {
  const { details } = usePluginDetails(address);
  // console.log("details", details, "address", address, "blocky");
  const blocky = blockies.create({ seed: address }).toDataURL();

  console.log("details", details);

  return (
    <Link
      to={{
        pathname: "/plugin/" + address,
      }}
    >
      <div className="rounded-md hover:border-p-h cursor-pointer shadow-xl border-s-text/20 border-[1px] transition-colors duration-300 ease-in-out p-6 flex flex-col">
        <img
          src={blocky}
          alt="blocky"
          className="w-12 h-12 rounded-full shadow-sm mb-3"
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold line-clamp-1">
            {details?.metadata?.name}
          </div>
        </div>

        <div className="flex flex-row items-center text-sm py-1">
          <div className="font-semibold">4.7 ⭐ </div>
          <div className="text-s-text ml-1">(2.3k)</div>
        </div>

        <div className="line-clamp-3 text-s-text text-sm my-2 leading-relaxed">
          {details?.metadata?.description || "No description provided"}
        </div>

        <div className="flex flex-row flex-wrap text-s-text font-bold text-xs">
          {details?.metadata?.requiresRootAccess && (
            <div className="rounded-md bg-s-bg px-2 py-1 border-s-text/10 shadow-xl border">
              Requires Root Access
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
