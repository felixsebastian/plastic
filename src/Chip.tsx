import { css } from "@emotion/react";
import { BoxProps, Box } from "@specimen/foundation";
import { ReactNode } from "react";

export interface Props extends BoxProps {
  children?: ReactNode;
  color?: string;
}

const Chip = ({ children, color, ...props }: Props) => (
  <Box
    radius="md"
    py="sm"
    px="md"
    bg={color ?? "gray300"}
    {...props}
    css={css`
      position: relative;
    `}
  >
    {children}
  </Box>
);

export default Chip;
