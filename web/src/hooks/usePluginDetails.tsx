import React from "react";
import { PluginDetails, loadPluginDetails } from "../logic/plugins";
import { usePluginStore } from "../logic/store/pluginStore";
export const usePluginDetails = (
  address?: string
): {
  details: PluginDetails | undefined;
  refresh: () => Promise<void>;
} => {
  const [details, setDetails] = React.useState<PluginDetails | undefined>(
    undefined
  );
  const plugins = usePluginStore((state) => state.plugins);
  const addPlugin = usePluginStore((state) => state.addPlugin);
  const fetchData = React.useCallback(async () => {
    try {
      if (!address) return;
      const plugin = await loadPluginDetails(address);
      setDetails(plugin);
      addPlugin(address, plugin);
    } catch (e) {
      console.warn(e);
    }
  }, [address, addPlugin, setDetails]);

  React.useEffect(() => {
    if (!address) return;
    if (plugins.get(address)) {
      setDetails(plugins.get(address));
      return;
    }
    fetchData();
  }, [address, plugins, fetchData, setDetails]);

  return {
    details,
    refresh: fetchData,
  };
};
