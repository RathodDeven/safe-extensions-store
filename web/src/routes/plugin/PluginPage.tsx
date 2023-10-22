import React from "react";
import { useParams } from "react-router-dom";
import { usePluginDetails } from "../../hooks/usePluginDetails";
import { disablePlugin, enablePlugin, flagPlugin } from "../../logic/plugins";
import clsx from "clsx";
import { publicFileUrl } from "../../logic/utils";
import { getListOfPermission } from "../../logic/permissions";
import Markup from "../../components/Lexical/Markup";
import { usePluginStore } from "../../logic/store/pluginStore";
import ImageWithPulsingLoader from "../../components/ImageWithPulsingLoader";
import { useUser } from "../../components/wrapper/UserProvider";
import { toast } from "react-toastify";
import { getRegistry } from "../../logic/protocol";

const PluginPage = () => {
  const { pluginAddress } = useParams();
  const { details } = usePluginDetails(pluginAddress);
  const setPlugin = usePluginStore((state) => state.addPlugin);
  const [enabled, setEnabled] = React.useState<undefined | boolean>(undefined);
  const [isRemoved, setIsRemoved] = React.useState<boolean>(false);
  const installedPLugins = usePluginStore((state) => state.installedPlugins);
  const setInstalledPlugins = usePluginStore(
    (state) => state.setInstalledPlugins
  );
  const discoveredPlugins = usePluginStore((state) => state.discoveredPlugins);
  const setDiscoverPlugins = usePluginStore(
    (state) => state.setDiscoveredPlugins
  );

  const removedPlugins = usePluginStore((state) => state.removedPlugins);
  const setRemovedPlugins = usePluginStore((state) => state.setRemovedPlugins);

  const { isOwnerOfRegistry } = useUser();

  const checkIsRemoved = React.useCallback(async () => {
    if (!pluginAddress) return;
    const registry = await getRegistry();
    const data = await registry.listedModules(pluginAddress);
    console.log("data", data);
    setIsRemoved(Boolean(data[1]));
  }, [pluginAddress]);

  React.useEffect(() => {
    checkIsRemoved();
    setEnabled(details?.enabled);
  }, [details?.enabled]);

  const handleToggle = React.useCallback(async () => {
    if (enabled === undefined || !pluginAddress || !details) return;
    try {
      if (enabled) {
        await disablePlugin(pluginAddress);
        setPlugin(pluginAddress, {
          ...details,
          enabled: false,
        });
        setInstalledPlugins(
          installedPLugins.filter(
            (plugin) => plugin.toLowerCase() !== pluginAddress.toLowerCase()
          )
        );
        setEnabled(false);
      } else {
        // await enablePlugin(pluginAddress, details.metadata.requiresRootAccess);
        await enablePlugin(pluginAddress, details.metadata.requiredPermissions);
        setPlugin(pluginAddress, {
          ...details,
          enabled: true,
        });
        setInstalledPlugins([...installedPLugins, pluginAddress]);
        setEnabled(true);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [details, pluginAddress, enabled]);

  if (!details) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-2/3 py-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-8">
            <ImageWithPulsingLoader
              src={details?.metadata?.iconUrl || publicFileUrl("/logo.png")}
              className="w-12 h-12 rounded-full shadow-sm"
            />
            <div className="text-3xl font-semibold word-wrap">
              {details.metadata.name}
            </div>
          </div>

          <div className="flex flex-row items-center space-x-4">
            {/* remove plugin button */}
            {isOwnerOfRegistry && pluginAddress && !isRemoved && (
              <button
                className="rounded-full shrink-0 ml-8 px-8 text-sm py-2.5 text-s-bg font-bold bg-red-300 hover:bg-red-400 transition-all duration-300"
                onClick={async () => {
                  try {
                    await toast.promise(flagPlugin(pluginAddress), {
                      error: "Error removing plugin",
                      success: "Plugin removed successfully",
                      pending: "Removing plugin",
                    });
                  } catch (e) {
                    console.warn(e);
                  }

                  // remove pluginAddress from discovered plugins & installed plugins
                  setDiscoverPlugins(
                    discoveredPlugins.filter(
                      (plugin) =>
                        plugin.toLowerCase() !== pluginAddress.toLowerCase()
                    )
                  );

                  setInstalledPlugins(
                    installedPLugins.filter(
                      (plugin) =>
                        plugin.toLowerCase() !== pluginAddress.toLowerCase()
                    )
                  );

                  setRemovedPlugins([...removedPlugins, pluginAddress]);

                  setIsRemoved(true);
                }}
              >
                Remove from Store
              </button>
            )}

            {isRemoved ? (
              <div className="text-red-400 font-semibold text-lg">
                Removed from Store
              </div>
            ) : (
              <button
                className={clsx(
                  "rounded-full shrink-0 ml-8 px-8 text-sm py-2.5 text-p-bg font-bold hover:bg-p-h/60 transition-all duration-300",
                  enabled === undefined
                    ? "bg-p-h/60 cursor-not-allowed"
                    : enabled
                    ? "bg-red-500 cursor-pointer"
                    : "bg-p-h cursor-pointer"
                )}
                disabled={enabled === undefined}
                onClick={handleToggle}
              >
                {enabled ? "Remove from Safe" : "Add to Safe"}
              </button>
            )}
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-4 text-lg m-2">
          {details?.metadata?.appUrl && (
            <a
              href={details?.metadata?.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-p-h"
            >
              {details?.metadata?.appUrl}
            </a>
          )}

          {/* to be fetched from tableland */}
          <div className="flex flex-row items-center text-sm py-1">
            <div className="font-semibold">4.7 ⭐ </div>
            <div className="ml-1">(2.3k ratings)</div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap text-p-text font-bold text-xs my-2 gap-x-4">
          {details?.metadata?.requiredPermissions &&
            getListOfPermission(details?.metadata?.requiredPermissions).map(
              (permission) => (
                <div className="rounded-md bg-t-bg px-2 py-1 border-s-text/10 shadow-xl border">
                  {permission}
                </div>
              )
            )}
        </div>
      </div>

      {/* row of screen shots that are scrollable (if more than 1) */}
      <div
        className={clsx(
          "flex flex-wrap flex-row items-center overflow-x-auto gap-4 justify-center"
        )}
      >
        {details?.metadata?.ssUrls?.map((url) => (
          <ImageWithPulsingLoader src={url} className="h-[350px] rounded-xl" />
        ))}
      </div>

      <div className="w-2/3 py-8">
        {/* description */}
        {details?.metadata?.description && (
          <>
            <div className="text-2xl font-semibold my-4">Overview</div>

            <Markup
              className={`whitespace-pre-wrap break-words text-base text-p-text w-full`}
            >
              {details?.metadata?.description}
            </Markup>
          </>
        )}

        {/* line */}
        <div className="w-full h-px bg-s-text/30 my-8" />

        {/* details */}

        <div className="text-2xl font-semibold my-4">Details</div>

        <div className="flex flex-row flex-wrap ">
          <div className="space-y-1">
            <div className="font-semibold text-p-text text-lg">Version</div>
            <div className="text-s-text font-normal">
              {details?.metadata?.version}
            </div>
          </div>

          {/* <div>
            <div className="font-semibold text-p-text">Author</div>
            <div className="text-p-text">{details?.metadata?.updated}</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PluginPage;
