import { useEffect, useState } from "react";
import "./Plugins.css";
import { loadPlugins } from "../../logic/plugins";
import { Plugin } from "./Plugin";

const PluginList = () => {
  const [showFlagged, setFilterFlagged] = useState<boolean>(false);
  const [plugins, setPlugins] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");

      try {
        const loadedPlugins = await loadPlugins(!showFlagged);
        console.log("loadedPlugins", loadedPlugins);
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
