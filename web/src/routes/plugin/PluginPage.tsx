import React from "react";
import { useParams } from "react-router-dom";
import { usePluginDetails } from "../../hooks/usePluginDetails";
import { disablePlugin, enablePlugin } from "../../logic/plugins";
import clsx from "clsx";
import { publicFileUrl } from "../../logic/utils";
import { getListOfPermission } from "../../logic/permissions";
import Markup from "../../components/Lexical/Markup";
import { usePluginStore } from "../../logic/store/pluginStore";

const PluginPage = () => {
  const { pluginAddress } = useParams();
  const { details } = usePluginDetails(pluginAddress);
  const setPlugin = usePluginStore((state) => state.addPlugin);
  const [enabled, setEnabled] = React.useState<undefined | boolean>(undefined);

  console.log("enabled", enabled);

  React.useEffect(() => {
    console.log("details", details);
    setEnabled(details?.enabled);
  }, [details?.enabled]);

  const handleToggle = React.useCallback(async () => {
    console.log("handleToggle details", details);
    if (enabled === undefined || !pluginAddress || !details) return;
    try {
      if (enabled) {
        await disablePlugin(pluginAddress);
        setPlugin(pluginAddress, {
          ...details,
          enabled: false,
        });
        setEnabled(false);
      } else {
        // await enablePlugin(pluginAddress, details.metadata.requiresRootAccess);
        await enablePlugin(pluginAddress, details.metadata.requiredPermissions);
        setPlugin(pluginAddress, {
          ...details,
          enabled: true,
        });
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
            <img
              src={details?.metadata?.iconUrl || publicFileUrl("/logo.png")}
              className="w-12 h-12 rounded-full shadow-sm"
            />
            <div className="text-3xl font-semibold word-wrap">
              {details.metadata.name}
            </div>
          </div>
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
        <div className="flex flex-row flex-wrap text-s-text font-bold text-xs my-2 gap-x-4">
          {details?.metadata?.requiredPermissions &&
            getListOfPermission(details?.metadata?.requiredPermissions).map(
              (permission) => (
                <div className="rounded-md bg-s-bg px-2 py-1 border-s-text/10 shadow-xl border">
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
          <img src={url} className="h-[350px] rounded-md" />
        ))}
      </div>

      {/* description */}

      <div className="w-2/3 py-8">
        {details?.metadata?.description && (
          <>
            <div className="text-2xl font-semibold my-4">Overview</div>

            <Markup
              className={`whitespace-pre-wrap break-words text-base text-s-text font-semibold w-full`}
            >
              {details?.metadata?.description}
            </Markup>
          </>
        )}
      </div>
    </div>
  );
};

export default PluginPage;
