import { css } from "@emotion/react";
import { Box, Stack, useTheme } from "@specimen/foundation";

const PageSection = ({ bg, ...props }: any) => {
  const { s, layout } = useTheme();
  const { large } = layout.breakpoints;

  return (
    <Box bg={bg}>
      <Stack
        gap="lg"
        py="md"
        css={css`
          margin: 0 ${layout.contentSideMargin};
          max-width: ${layout.contentMaxWidth};
          width: 100%;
          @media screen and (max-width: calc(${large} - 1px )) {
            margin: 0 ${s.md};
          }
        `}
        {...props}
      />
    </Box>
  );
};

export default PageSection;
