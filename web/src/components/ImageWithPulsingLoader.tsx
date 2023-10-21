import React, { useState } from "react";
// import { IMAGE_KIT_ENDPOINT } from '../../../utils/config'
// import { IMAGE_KIT_ENDPOINT, LensInfuraEndpoint } from '../../../utils/config'

const ImageWithPulsingLoader = ({
  loaderClassName = "",
  src,
  ...props
}: {
  loaderClassName?: string;
  src: string;
} & React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  return (
    <>
      {loading && (
        <div
          className={`${
            loaderClassName ? loaderClassName : props.className
          } bg-gray-300 animate-pulse`}
        />
      )}
      <img
        {...props}
        src={!error ? src : "/defaultBanner.png"}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        alt=" not found"
        onLoad={() => setLoading(false)}
        className={`${props.className} ${loading ? "hidden" : ""}`}
      />
    </>
  );
};

export default ImageWithPulsingLoader;
