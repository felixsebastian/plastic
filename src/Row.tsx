import { css } from "@emotion/react";
import { Box, useTheme } from "@specimen/foundation";
import { Children } from "react";
import Column from "./Column";

const alignments = {
  top: "flex-start",
  bottom: "flex-end",
  center: "center",
};

const Row = ({
  children,
  gap = "md",
  simple,
  alignY = "top",
  ...props
}: any) => {
  const { s } = useTheme();

  return (
    <Box
      d="flex"
      css={css`
        gap: ${s[gap]};
        align-items: ${alignments[alignY]};
        flex-wrap: nowrap;
      `}
      {...props}
    >
      {simple
        ? Children.map(children, (child) => <Column>{child}</Column>)
        : children}
    </Box>
  );
};

export default Row;
