import { css } from "@emotion/react";
import { Box, Stack, useTheme } from "@specimen/foundation";
import { heartTheme } from "@kaizen/design-tokens";

const { large } = heartTheme.layout.breakpoints;

const PageSection = ({ bg, ...props }: any) => {
  const { s } = useTheme();

  return (
    <Box bg={bg}>
      <Stack
        gap="lg"
        py="md"
        css={css`
          margin: 0 auto;
          max-width: ${heartTheme.layout.contentMaxWidth};
          @media screen and (max-width: ${large}) {
            width: 100%;
            padding: ${s.md};
          }
        `}
        {...props}
      />
    </Box>
  );
};

export default PageSection;
