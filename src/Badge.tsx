import { css } from "@emotion/react";
import { Box, Center, Text, useTheme } from "@specimen/foundation";

interface NumericProps {
  children: string;
  active?: boolean;
  dot?: never;
}

interface DotProps {
  children?: never;
  active?: never;
  dot: true;
}

type Props = NumericProps | DotProps;

const Badge = (props: Props) => {
  const { s } = useTheme();

  let bg;

  if (props.dot) {
    bg = "favorable";
  } else if (props.active) {
    bg = "blue500";
  } else {
    bg = "gray300";
  }

  return (
    <Box bg={bg} p="sm" radius="md" css={css({ minWidth: s.sm })}>
      <Center>
        <Text
          size="xs"
          color={props.active ? "white" : "text"}
          weight="semiBold"
        >
          {props.children}
        </Text>
      </Center>
    </Box>
  );
};

export default Badge;
