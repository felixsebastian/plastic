import { css } from "@emotion/react";
import { Box, TShirtSizes } from "@specimen/foundation";

interface Props {
  color: string;
  size: TShirtSizes;
}

const Dot = ({ color, size }: Props) => (
  <Box
    bg={color}
    w={size}
    h={size}
    css={css`
      border-radius: 50%;
    `}
  />
);

export default Dot;
