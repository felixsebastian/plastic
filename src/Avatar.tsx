import { css } from "@emotion/react";
import { first, last } from "lodash";
import { Box, Text, useTheme, Center } from "@specimen/foundation";

const getInitials = (name: string) => {
  const tokens = name.toUpperCase().split(" ");
  return `${first(first(tokens))}${first(last(tokens))}`;
};

const sizes = {
  sm: {
    box: "lg",
    text: "2xs",
  },
  md: {
    box: "xxl",
    text: "sm",
  },
  lg: {
    box: "4xl",
    text: "xl",
  },
};

interface Props {
  name: string;
  size: keyof typeof sizes;
}

const Avatar = (props: Props) => {
  const { s, c } = useTheme();

  return (
    <Box
      bg="orange100"
      w={sizes[props.size].box as any}
      h={sizes[props.size].box as any}
      css={css`
        border-radius: 50%;
        box-shadow: 0 0 0 ${s.xxs} ${c.gray200} inset;
      `}
    >
      <Center>
        <Text weight="bold" size={sizes[props.size ?? "md"].text as any}>
          {getInitials(props.name)}
        </Text>
      </Center>
    </Box>
  );
};

export default Avatar;
