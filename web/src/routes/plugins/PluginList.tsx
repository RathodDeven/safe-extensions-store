import { useCallback, useEffect, useState } from "react";
import "./Plugins.css";
import { loadPlugins } from "../../logic/plugins";
import { Plugin } from "./Plugin";

const PluginList = () => {
  const [showFlagged, setFilterFlagged] = useState<boolean>(false);
  const [plugins, setPlugins] = useState<string[]>([]);
  const fetchData = useCallback(async () => {
    try {
      setPlugins([]);
      setPlugins(await loadPlugins(!showFlagged));
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
