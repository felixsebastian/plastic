import { css } from "@emotion/react";
import { Box, useTheme } from "@specimen/foundation";
import { Children } from "react";

const Row = ({ children }: any) => {
  const { s } = useTheme();

  return (
    <Box
      d="flex"
      css={css`
        gap: ${s.md};
      `}
    >
      {Children.map(children, (child) => (
        <div
          css={css`
            flex: 1 0 0;
          `}
        >
          {child}
        </div>
      ))}
    </Box>
  );
};

export default Row;
