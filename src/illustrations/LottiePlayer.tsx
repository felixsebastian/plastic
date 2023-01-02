import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { getAnimationData, LottieAnimation } from "./lottie";
import { BaseProps } from "./Base";
import getAssetUrl from "./getAssetUrl";
import AspectRatio, { AspectRatioType } from "./AspectRatio";
import { css } from "@emotion/react";
import { Box, BoxProps } from "@specimen/foundation";

export interface AnimatedBaseProps
  extends BaseProps,
  Omit<BoxProps, "alt" | "name"> {
  autoplay?: boolean;
  loop?: boolean;
  aspectRatio?: AspectRatioType;
  fallback: string;
}

enum AssetStatus {
  Loading,
  Success,
  Failed,
}

export const AnimatedBase = ({
  name,
  fallback,
  autoplay = true,
  loop = false,
  alt,
  aspectRatio,
  ...props
}: AnimatedBaseProps) => {
  const lottiePlayer = useRef<HTMLDivElement>(null);
  const [asset, setAsset] = useState<null | LottieAnimation>(null);

  const [playerLoaded, setPlayerLoaded] = useState<AssetStatus>(
    AssetStatus.Loading
  );

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        const srcParsed = await getAnimationData(name);
        if (!didCancel) setAsset(srcParsed);
      } catch (err) {
        setPlayerLoaded(AssetStatus.Failed);
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, []);

  useEffect(() => {
    const initialiseLottiePlayer = () => {
      if (asset && lottiePlayer.current !== null) {
        setPlayerLoaded(AssetStatus.Success);
        lottie.loadAnimation({
          container: lottiePlayer.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: asset,
        });
      }
    };
    initialiseLottiePlayer();
  }, [asset]);

  const LoadingState = (
    /* Avoid jump when asset loads */
    <svg
      aria-hidden={true}
      data-testid="loading"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill="#f9f9f9" cx="48" cy="48" r="48" />
    </svg>
  );

  const FailedState = (
    <Box as="img" htmlAttributes={{ alt, src: getAssetUrl(fallback) }} />
  );

  return (
    <AspectRatio {...props} type={aspectRatio}>
      <figcaption
        css={css`
          &:not(:focus):not(:active) {
            clip: rect(0, 0, 0, 0);
            clip-path: inset(50%);
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            overflow: hidden;
            white-space: nowrap;
            border: 0;
          }
        `}
      >
        {alt}
      </figcaption>
      {playerLoaded === AssetStatus.Loading && LoadingState}
      {playerLoaded === AssetStatus.Failed && FailedState}
      <div data-testid="lottie-player" ref={lottiePlayer} aria-hidden={true} />
    </AspectRatio>
  );
};
