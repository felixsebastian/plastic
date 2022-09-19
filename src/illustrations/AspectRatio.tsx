import { css } from "@emotion/react";
import { Box, BoxProps } from "@specimen/foundation";

const landscape = css`
  aspect-ratio: 4/3;

  @supports not (aspect-ratio: auto) {
    &::before {
      float: left;
      padding-top: 75%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
`;

const portrait = css`
  aspect-ratio: 3/4;

  @supports not (aspect-ratio: auto) {
    &::before {
      float: left;
      padding-top: 133.33%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
`;

const square = css`
  aspect-ratio: auto 1/1;

  @supports not (aspect-ratio: auto) {
    &::before {
      float: left;
      padding-top: 100%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
`;

const aspectRatios = {
  portrait,
  landscape,
  square,
};

export type AspectRatioType = keyof typeof aspectRatios;

interface Props extends BoxProps {
  type?: AspectRatioType;
}

const AspectRatio = (props: Props) => (
  <Box
    as="figure"
    m="none"
    d="flex"
    {...props}
    css={css(
      css`
        margin: 0;
        align-items: center;
      `,
      aspectRatios[props.type ?? "square"]
    )}
  />
);

export default AspectRatio;
