import { useCallback, useEffect, useState } from "react";
import "./Plugins.css";
import { loadPlugins } from "../../logic/plugins";
import { Plugin } from "./Plugin";
import { usePluginStore } from "../../logic/store/pluginStore";
import { getManager } from "../../logic/protocol";

const PluginList = () => {
  const [showFlagged, setFilterFlagged] = useState<boolean>(false);
  const [plugins, setPlugins] = useState<string[]>([]);
  const discoverPlugins = usePluginStore((state) => state.discoverPlugins);
  const setDiscoverPlugins = usePluginStore(
    (state) => state.setDiscoverPlugins
  );

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");
      console.log("discoverPlugins", discoverPlugins);

      const manager = await getManager();
      console.log("manager", await manager.getAddress());
      if (discoverPlugins?.length > 0) {
        setPlugins(discoverPlugins);
        return;
      }
      try {
        const loadedPlugins = await loadPlugins(!showFlagged);
        console.log("loadedPlugins", loadedPlugins);
        setDiscoverPlugins(loadedPlugins);
        setPlugins(loadedPlugins);
      } catch (e) {
        console.warn(e);
      }
    };
    fetchData();
  }, []);
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
