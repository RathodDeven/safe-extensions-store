import React from "react";
import { useParams } from "react-router-dom";
import { usePluginDetails } from "../../hooks/usePluginDetails";
import { disablePlugin, enablePlugin, flagPlugin } from "../../logic/plugins";
import clsx from "clsx";
import { formatAddress, publicFileUrl } from "../../logic/utils";
import { getListOfPermission } from "../../logic/permissions";
import Markup from "../../components/Lexical/Markup";
import { usePluginStore } from "../../logic/store/pluginStore";
import ImageWithPulsingLoader from "../../components/ImageWithPulsingLoader";
import { useUser } from "../../components/wrapper/UserProvider";
import { toast } from "react-toastify";
import { getRegistry } from "../../logic/protocol";
import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { REVIEW_TABLE_ID } from "../../logic/constants";
import { getConnectedSigner } from "../../logic/web3";
import getStampFyiURL from "../../logic/getStampFyiURL";
import useReviews from "../../hooks/useReviews";
import useAverageRating from "../../hooks/useAverageRating";

const labels: { [index: string]: string } = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

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

  const { isOwnerOfRegistry, db } = useUser();

  const [rating, setRating] = React.useState<number>(5);
  const [review, setReview] = React.useState<string>("");
  const [writingReview, setWritingReview] = React.useState<boolean>(false);
  // @ts-ignore
  const { reviews, addReview } = useReviews({ pluginAddress });
  const { averageRating, nummberOfRatings } = useAverageRating({
    pluginAddress,
  });

  const checkIsRemoved = React.useCallback(async () => {
    if (!pluginAddress) return;
    const registry = await getRegistry();
    const data = await registry.listedModules(pluginAddress);
    setIsRemoved(Boolean(data[1].toNumber()));
  }, [pluginAddress]);

  React.useEffect(() => {
    checkIsRemoved();
    setEnabled(details?.enabled);
  }, [details?.enabled, db]);

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
              src={
                details?.metadata?.iconUrl ||
                publicFileUrl("/safe_store_logo.png")
              }
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

          <div className="flex flex-row items-center text-sm py-1">
            <div className="font-semibold">{`${averageRating} ⭐ `}</div>
            <div className="text-s-text ml-1">{`(${nummberOfRatings})`}</div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap text-p-text font-bold text-xs my-2 gap-x-4">
          {details?.metadata?.requiredPermissions &&
            getListOfPermission(details?.metadata?.requiredPermissions).map(
              (permission) => (
                <div
                  key={permission}
                  className="rounded-md bg-t-bg px-2 py-1 border-s-text/10 shadow-xl border"
                >
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
          <ImageWithPulsingLoader
            key={url}
            src={url}
            loaderClassName="w-[700px]"
            className="h-[350px] rounded-xl"
          />
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

        <div className="w-full h-px bg-s-text/30 my-8" />

        {/* reviews */}

        <div className="w-full flex flex-row items-center justify-between mb-3">
          <div>
            <div className="flex flex-row items-center space-x-3">
              <div className="font-bold text-2xl">
                {`${averageRating} out of 5 stars`}{" "}
              </div>
              <Rating
                name="half-rating-read"
                value={averageRating}
                precision={0.1}
                readOnly
                size="large"
                emptyIcon={
                  <StarIcon
                    style={{ opacity: 1, color: "grey" }}
                    fontSize="inherit"
                  />
                }
              />
            </div>

            <div>{`${nummberOfRatings} ratings`}</div>
          </div>

          <button
            onClick={() => {
              writingReview ? setWritingReview(false) : setWritingReview(true);
            }}
            className="rounded-full shrink-0 ml-8 px-8 text-sm py-2.5 text-p-h font-bold border border-p-text hover:bg-p-h/60 transition-all duration-300"
          >
            Write a review
          </button>
        </div>

        {writingReview && (
          <div className="w-full flex flex-row justify-center items-center">
            <div className="flex flex-col items-center">
              <div className="text-2xl font-semibold my-4">
                Rate this plugin
              </div>
              <div className="text-p-text text-sm mb-2">
                {labels[rating !== null ? rating : 0] || ""}
              </div>

              <Rating
                value={rating}
                precision={1}
                onChange={(event, newValue) => {
                  setRating(Number(newValue));
                }}
                emptyIcon={
                  <StarIcon
                    style={{ opacity: 1, color: "grey" }}
                    fontSize="inherit"
                  />
                }
              />

              <textarea
                className="w-[500px] outline-none h-32 rounded-md p-4 bg-t-bg my-4 "
                placeholder="Write your review here"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />

              <div className="text-xs font-semibold my-4">
                Your reviews are stored on tableland and publicly available
              </div>

              <div className="flex flex-row items-center space-x-4 my-2">
                {/* cancle button */}
                <button
                  className="rounded-xl border border-p-h shrink-0 ml-8 px-8 text-sm py-2.5 text-p-h font-bold hover:bg-t-bg transition-all duration-300"
                  onClick={() => {
                    setRating(5);
                    setReview("");
                    setWritingReview(false);
                  }}
                >
                  Cancel
                </button>

                <button
                  className="rounded-xl shrink-0 ml-8 px-8 text-sm py-2.5 text-p-bg bg-p-h font-bold hover:bg-p-h/80 transition-all duration-300"
                  onClick={async () => {
                    try {
                      if (!db) return;
                      const provider = await getConnectedSigner();
                      if (!provider) return;
                      const address = await provider.getAddress();

                      const timestamp = Date.now();
                      // logic of submiting review to tableland review table

                      const { meta: insert } = await toast.promise(
                        db
                          .prepare(
                            `INSERT INTO ${REVIEW_TABLE_ID} (review, plugin_address, ratings, author, timestamp) VALUES (?, ?, ?, ?, ?);`
                          )
                          .bind(
                            review,
                            pluginAddress,
                            rating,
                            address,
                            timestamp
                          )
                          .run(),
                        {
                          error: "Error submiting review",
                          success: "Review submitted successfully",
                          pending: "Submitting review",
                        }
                      );

                      console.log("insert", insert);

                      // await toast.promise(
                      //   db
                      //     ?.prepare(
                      //       `INSERT INTO ${REVIEW_TABLE_ID} (review, plugin_address, ratings, author, timestamp) VALUES (?, ?, ?, ?, ?);`
                      //     )
                      //     .bind(
                      //       review,
                      //       pluginAddress,
                      //       rating,
                      //       address,
                      //       timestamp
                      //     )
                      //     .run(),
                      //   {
                      //     error: "Error submiting review",
                      //     success: "Review submitted successfully",
                      //     pending: "Submitting review",
                      //   }
                      // );

                      addReview({
                        id: timestamp,
                        review,
                        plugin_address: String(pluginAddress),
                        ratings: rating,
                        author: address,
                        timestamp,
                      });
                    } catch (e) {
                      toast.error("Error submitting review");
                      console.warn(e);
                    } finally {
                      setRating(5);
                      setReview("");
                      setWritingReview(false);
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* reviews */}

        {reviews.length > 0 && (
          <div className="space-y-4 w-full my-4">
            {reviews.length > 0 &&
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-t-bg text-p-text rounded-xl py-4 px-6 w-full flex flex-row space-x-4"
                >
                  <img
                    src={getStampFyiURL(review.author)}
                    alt="user"
                    className="w-12 h-12 rounded-full shadow-sm"
                  />
                  <div className="space-y-2">
                    <div className="flex flex-row items-center space-x-3">
                      <div className="font-semibold">
                        {formatAddress(review.author)}
                      </div>
                      <Rating
                        name="half-rating-read"
                        defaultValue={review.ratings}
                        precision={0.1}
                        readOnly
                        size="small"
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 1, color: "grey" }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {/* time in format of OCt 22, 2023 */}

                      <div className="text-s-text font-semibold text-sm">
                        {new Date(review.timestamp).toDateString()}
                      </div>
                    </div>

                    <Markup>{review.review}</Markup>
                  </div>
                </div>
              ))}
          </div>
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
