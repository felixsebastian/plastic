import { css } from "@emotion/react";
import { Box, useTheme } from "@specimen/foundation";
import { Children } from "react";
import Column from "./Column";

const Row = ({ children, gap = "md", simple }: any) => {
  const { s } = useTheme();

  return (
    <Box
      d="flex"
      css={css`
        flex-wrap: nowrap;
        gap: ${s[gap]};
      `}
    >
      {simple
        ? Children.map(children, (child) => <Column>{child}</Column>)
        : children}
    </Box>
  );
};

export default Row;
