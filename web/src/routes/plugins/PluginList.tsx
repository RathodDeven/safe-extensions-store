import { useEffect, useState } from "react";
import "./Plugins.css";
import { loadPlugins } from "../../logic/plugins";
import { Plugin } from "./Plugin";
import { usePluginStore } from "../../logic/store/pluginStore";

const PluginList = () => {
  const [plugins, setPlugins] = useState<string[]>([]);
  const discoveredPlugins = usePluginStore((state) => state.discoveredPlugins);
  const setDiscoverPlugins = usePluginStore(
    (state) => state.setDiscoveredPlugins
  );

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");

      if (discoveredPlugins?.length > 0) {
        setPlugins(discoveredPlugins);
        return;
      }

      try {
        const loadedPlugins = await loadPlugins();
        console.log("loadedPlugins", loadedPlugins);
        setDiscoverPlugins(loadedPlugins);
        setPlugins(loadedPlugins);
      } catch (e) {
        console.warn(e);
      }
    };
    fetchData();
  }, []);

  if (plugins.length === 0)
    return (
      <div className="w-2/3 py-8">
        <div className="w-full w-full grid grid-cols-3 gap-8 items-stretch ">
          <Plugin address="0x0000000" />
          <Plugin address="0x0000000" />
        </div>
      </div>
    );

  return (
    <div className="w-2/3 py-8">
      <div className="w-full w-full grid grid-cols-3 gap-8 items-stretch ">
        {plugins.map((plugin) => (
          <Plugin key={plugin} address={plugin} />
        ))}
      </div>
    </div>
  );
};

export default PluginList;
