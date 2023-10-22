import { create } from "zustand";
import { PluginDetails } from "../plugins";

interface PluginWithAddress {
  address: string;
  plugin: PluginDetails;
}

interface PluginStore {
  plugins: Map<string, PluginDetails>;
  addPlugin: (address: string, plugin: PluginDetails) => void;
  addPlugins: (pluginsWithAddresses: PluginWithAddress[]) => void;
  discoveredPlugins: string[];
  setDiscoveredPlugins: (discoveredPlugins: string[]) => void;
  installedPlugins: string[];
  setInstalledPlugins: (installedPlugins: string[]) => void;
  removedPlugins: string[];
  setRemovedPlugins: (removedPlugins: string[]) => void;
}

export const usePluginStore = create<PluginStore>((set) => ({
  plugins: new Map<string, PluginDetails>(),
  addPlugin: (address: string, plugin: PluginDetails) =>
    set((state) => {
      const plugins = new Map(state.plugins);
      plugins.set(address, plugin);
      return { plugins };
    }),
  addPlugins: (pluginsWithAddresses: PluginWithAddress[]) =>
    set((state) => {
      const plugins = new Map(state.plugins);
      pluginsWithAddresses.forEach((pluginWithAddress) => {
        plugins.set(pluginWithAddress.address, pluginWithAddress.plugin);
      });
      return { plugins };
    }),
  discoveredPlugins: [],
  setDiscoveredPlugins: (discoveredPlugins: string[]) =>
    set((state) => ({ discoveredPlugins })),
  installedPlugins: [],
  setInstalledPlugins: (installedPlugins: string[]) =>
    set((state) => ({ installedPlugins })),
  removedPlugins: [],
  setRemovedPlugins: (removedPlugins: string[]) =>
    set((state) => ({ removedPlugins })),
}));
