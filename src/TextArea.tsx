import { css } from "@emotion/react";
import { Box, BoxProps, useTheme } from "@specimen/foundation";

type Props = BoxProps;

const TextArea = (props: Props) => {
  const { s, c, fonts, defaultFont } = useTheme();

  return (
    <Box
      as="textarea"
      bg="white"
      radius="sm"
      p="md"
      w="full"
      h="8xl"
      {...props}
      css={css`
        border: none;
        box-shadow: 0 0 0 ${s.xxs} ${c.gray500} inset;
        font-family: ${fonts[defaultFont].name};
        font-size: 1.1rem;
        &:hover {
          background: ${c.gray100};
        }
        &:focus-visible {
          outline: ${s.xxs} solid ${c.outline};
          outline-offset: 1px;
        }
      `}
    />
  );
};

export default TextArea;
