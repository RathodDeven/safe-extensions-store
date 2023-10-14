import React from "react";
import { useParams } from "react-router-dom";
import { usePluginDetails } from "../../hooks/usePluginDetails";
import { disablePlugin, enablePlugin } from "../../logic/plugins";
import clsx from "clsx";
import { publicFileUrl } from "../../logic/utils";

const PluginPage = () => {
  const { pluginAddress } = useParams();
  const { details } = usePluginDetails(pluginAddress);
  const [enabled, setEnabled] = React.useState<undefined | boolean>(undefined);

  console.log("enabled", enabled);

  React.useEffect(() => {
    console.log("details", details);
    setEnabled(details?.enabled);
  }, [details?.enabled]);

  const handleToggle = React.useCallback(async () => {
    if (enabled === undefined || !pluginAddress || !details) return;
    try {
      if (enabled) {
        await disablePlugin(pluginAddress);
        setEnabled(false);
      } else {
        await enablePlugin(pluginAddress, details.metadata.requiresRootAccess);
        setEnabled(true);
      }
    } catch (e) {
      console.warn(e);
    }
  }, [details, pluginAddress, enabled]);

  if (!details) return null;

  return (
    <div className="w-2/3 py-8">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-8">
          <img
            src={publicFileUrl("/logo.png")}
            className="w-12 h-12 rounded-full shadow-sm"
          />
          <div className="text-3xl font-semibold word-wrap">
            {details.metadata.name}
          </div>
        </div>
        <button
          disabled={enabled === undefined}
          className={clsx(
            "rounded-full shrink-0 ml-8 px-8 text-sm py-2 text-p-bg font-bold hover:bg-p-h/60 transition-all duration-300",
            enabled === undefined
              ? "bg-p-h/60 cursor-not-allowed"
              : enabled
              ? "bg-red-500 cursor-pointer"
              : "bg-p-h cursor-pointer"
          )}
          onClick={handleToggle}
        >
          {enabled ? "Remove from Safe" : "Add to Safe"}
        </button>
      </div>
    </div>
  );
};

export default PluginPage;
