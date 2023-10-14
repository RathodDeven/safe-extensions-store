import { FunctionComponent, useCallback, useEffect, useState } from "react";
import * as blockies from "blockies-ts";
import "./Plugins.css";
import {
  PluginDetails,
  disablePlugin,
  enablePlugin,
  loadPluginDetails,
} from "../../logic/plugins";

type PluginProps = {
  address: string;
};

export const Plugin: FunctionComponent<PluginProps> = ({ address }) => {
  const [details, setDetails] = useState<PluginDetails | undefined>(undefined);

  // console.log("details", details, "address", address, "blocky");
  const blocky = blockies.create({ seed: address }).toDataURL();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setDetails(await loadPluginDetails(address));
      } catch (e) {
        console.warn(e);
      }
    };
    fetchData();
  }, [address]);

  console.log("details", details);

  const handleToggle = useCallback(async () => {
    if (details?.enabled === undefined) return;
    try {
      if (details.enabled) await disablePlugin(address);
      else await enablePlugin(address, details.metadata.requiresRootAccess);
    } catch (e) {
      console.warn(e);
    }
  }, [details]);

  return (
    <div className="rounded-md hover:border-p-h cursor-pointer shadow-xl border-s-text/20 border-[1px] transition-colors duration-300 ease-in-out p-6 flex flex-col">
      <img
        src={blocky}
        alt="blocky"
        className="w-12 h-12 rounded-full shadow-sm mb-4"
      />
      <div className="flex flex-col">
        <div className="text-lg font-semibold line-clamp-1">
          {details?.metadata?.name}
        </div>
      </div>

      <div className="line-clamp-3 text-s-text text-sm my-2 leading-relaxed">
        {details?.metadata?.description}
      </div>
    </div>
  );
};
