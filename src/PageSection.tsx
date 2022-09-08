import { css } from "@emotion/react";
import { Box, Stack, useTheme } from "@specimen/foundation";

const PageSection = ({ bg, ...props }: any) => {
  const { s } = useTheme();

  return (
    <Box bg={bg}>
      <Stack
        gap="lg"
        py="md"
        css={css`
          margin: 0 auto;
          max-width: 1200px;
          @media screen and (max-width: 1200px) {
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
