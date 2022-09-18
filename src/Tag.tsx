import { css } from "@emotion/react";
import { Box, Inline, Text, useTheme } from "@specimen/foundation";
import Chip, { Props as ChipProps } from "./Chip";
import ButtonElement from "./ButtonElement";
import Icon from "./Icon";

interface Props extends Omit<ChipProps, "children"> {
  children: string;
  handleClear?: () => void;
}

const Tag = ({ children, handleClear, ...props }: Props) => {
  const { c } = useTheme();

  if (handleClear) {
    return (
      <Chip py="none" pr="xs" {...props}>
        <Inline alignY="center" gap="sm">
          <Box py="sm">
            <Text size="sm">{children}</Text>
          </Box>
          <ButtonElement
            handleClick={handleClear}
            css={css`
              color: ${c.gray500};
              &:hover {
                color: ${c.gray600};
              }
            `}
          >
            <Icon id="Clear" color="currentColor" />
          </ButtonElement>
        </Inline>
      </Chip>
    );
  }

  return (
    <Chip {...props}>
      <Text size="sm">{children}</Text>
    </Chip>
  );
};

export default Tag;
