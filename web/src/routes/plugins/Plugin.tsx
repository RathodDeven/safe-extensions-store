import { FunctionComponent } from "react";
import * as blockies from "blockies-ts";
import "./Plugins.css";

import { Link } from "react-router-dom";
import { usePluginDetails } from "../../hooks/usePluginDetails";
import { getListOfPermission } from "../../logic/permissions";

export type PluginProps = {
  address: string;
};

export const Plugin: FunctionComponent<PluginProps> = ({ address }) => {
  const { details } = usePluginDetails(address);
  // console.log("details", details, "address", address, "blocky");
  const blocky = blockies.create({ seed: address }).toDataURL();

  if (!details)
    return (
      <div className="rounded-md hover:border-p-h cursor-pointer shadow-xl border-s-text/20 border-[1px] transition-colors duration-300 ease-in-out p-6 flex flex-col">
        <div className="w-12 h-12 rounded-full mb-3 animate-pulse bg-s-bg" />
        <div className="w-1/2 h-4 rounded-md mb-3 animate-pulse bg-s-bg" />
        <div className="w-full h-4 rounded-md mb-3 animate-pulse bg-s-bg" />
        <div className="w-full h-4 rounded-md mb-3 animate-pulse bg-s-bg" />
        <div className="w-full h-4 rounded-md mb-3 animate-pulse bg-s-bg" />
      </div>
    );

  return (
    <Link
      to={{
        pathname: "/plugin/" + address,
      }}
    >
      <div className="rounded-md hover:border-p-h cursor-pointer shadow-xl border-s-text/20 border-[1px] transition-colors duration-300 ease-in-out p-6 flex flex-col">
        {details?.metadata?.ssUrls?.length === 0 ? (
          <img
            src={details?.metadata?.iconUrl || blocky}
            alt="blocky"
            className="w-12 h-12 rounded-full shadow-sm mb-3"
          />
        ) : (
          <img
            src={details?.metadata?.ssUrls[0]}
            alt="ss"
            className="w-full h-[50%] rounded-md shadow-sm mb-3"
          />
        )}
        <div className="flex flex-col">
          <div className="text-lg font-semibold line-clamp-1">
            {details?.metadata?.name}
          </div>
        </div>

        {/* to be fetched from tableland */}
        <div className="flex flex-row items-center text-sm py-1">
          <div className="font-semibold">4.7 ⭐ </div>
          <div className="text-s-text ml-1">(2.3k)</div>
        </div>

        <div className="line-clamp-2 text-s-text text-sm my-2 leading-relaxed">
          {details?.metadata?.description || "No description provided"}
        </div>

        <div className="flex flex-row flex-wrap text-s-text font-bold text-xs my-1 gap-x-4">
          {details?.metadata?.requiredPermissions &&
            getListOfPermission(details?.metadata?.requiredPermissions!).map(
              (permission) => (
                <div className="rounded-md bg-s-bg px-2 py-1 border-s-text/10 shadow-xl border">
                  {permission}
                </div>
              )
            )}
        </div>
      </div>
    </Link>
  );
};
