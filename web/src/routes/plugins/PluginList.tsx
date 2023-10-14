import { useCallback, useEffect, useState } from "react";
import "./Plugins.css";
import { loadPlugins } from "../../logic/plugins";
import { Plugin } from "./Plugin";
import { usePluginStore } from "../../logic/store/pluginStore";

const PluginList = () => {
  const [showFlagged, setFilterFlagged] = useState<boolean>(false);
  const [plugins, setPlugins] = useState<string[]>([]);
  const discoverPlugins = usePluginStore((state) => state.discoverPlugins);
  const setDiscoverPlugins = usePluginStore(
    (state) => state.setDiscoverPlugins
  );

  const fetchData = useCallback(async () => {
    if (discoverPlugins.length > 0) {
      setPlugins(discoverPlugins);
      return;
    }
    try {
      setPlugins([]);
      const loadedPlugins = await loadPlugins(!showFlagged);
      setDiscoverPlugins(loadedPlugins);
      setPlugins(loadedPlugins);
    } catch (e) {
      console.warn(e);
    }
  }, [showFlagged]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="w-2/3 py-8">
      <div className="w-full w-full grid grid-cols-3 gap-8 items-stretch ">
        {plugins.map((plugin) => (
          <Plugin address={plugin} />
        ))}
      </div>
    </div>
  );
};

export default PluginList;
