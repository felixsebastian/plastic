import { Box, BoxProps } from "@specimen/foundation";
import getAssetUrl from "./getAssetUrl";
import AspectRatio, { AspectRatioType } from "./AspectRatio";

export interface BaseProps extends BoxProps {
  aspectRatio?: AspectRatioType;
  name: string;
  alt: string;
}

export const Base = ({ name, alt, aspectRatio, ...props }: BaseProps) => {
  const img = (
    <Box
      as="img"
      w="full"
      m="none"
      {...props}
      htmlAttributes={{
        alt,
        src: getAssetUrl(name),
        ...props.htmlAttributes,
      }}
    />
  );

  return aspectRatio ? (
    <AspectRatio type={aspectRatio}>{img}</AspectRatio>
  ) : (
    img
  );
};
