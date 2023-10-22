import React from "react";
import { Plugin } from "../plugins/Plugin";
import { loadFlaggedPlugins } from "../../logic/plugins";
import { usePluginStore } from "../../logic/store/pluginStore";

const RemovedPlugins = () => {
  const [plugins, setPlugins] = React.useState<string[]>([]);
  const removedPlugins = usePluginStore((state) => state.removedPlugins);
  const setRemovedPlugins = usePluginStore((state) => state.setRemovedPlugins);

  React.useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data");

      if (removedPlugins?.length > 0) {
        setPlugins(removedPlugins);
        return;
      }

      try {
        const loadedPlugins = await loadFlaggedPlugins();
        console.log("loadedPlugins", loadedPlugins);
        setRemovedPlugins(loadedPlugins);
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
      <div className="w-full w-full grid grid-cols-3 gap-8 items-stretch">
        {plugins.map((plugin) => (
          <Plugin key={plugin} address={plugin} />
        ))}
      </div>
    </div>
  );
  return <div>RemovedPlugins</div>;
};

export default RemovedPlugins;
