import { css } from "@emotion/react";
import { Box, BoxProps, useTheme } from "@specimen/foundation";
import { forwardRef, ReactNode, Ref } from "react";

export type Color = "blue" | "green" | "yellow" | "red" | "orange" | "purple";

interface Props extends BoxProps {
  children?: ReactNode;
  color?: Color;
}

const Well = ({ color = "blue", ...props }: Props, ref: Ref<HTMLElement>) => {
  const { s, c } = useTheme();

  return (
    <Box
      ref={ref}
      p="lg"
      bg={color ? color + "100" : undefined}
      radius="sm"
      {...props}
      css={css`
        border: ${s.sm3} solid ${c[color + "300"]};
      `}
    >
      {props.children}
    </Box>
  );
};

const WellForwardedRef = forwardRef(Well);

export default WellForwardedRef;
