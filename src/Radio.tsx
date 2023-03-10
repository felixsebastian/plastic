import { css } from "@emotion/react";
import {
  Box,
  Inline,
  Text,
  TextInlineStyle,
  useTheme,
} from "@specimen/foundation";
import Icon from "./Icon";
import { nanoid } from "nanoid";

const Control = ({ state, ...props }: any) => {
  const { c, s } = useTheme();

  return (
    <Box
      aria-hidden="true"
      handleClick={props.handleClick}
      as="button"
      htmlAttributes={{ type: "button" }}
      bg="white"
      radius="xl"
      d="flex"
      w="lg"
      h="lg"
      css={css`
        padding: 0;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: 0 0 0 ${s.xxs} ${c.gray500} inset;
        outline-offset: 1px;
        cursor: pointer;
        &:hover {
          box-shadow: 0 0 0 ${s.xxs} ${c.purple800} inset;
        }
        &:focus-visible {
          outline: ${s.xxs} solid ${c.outline};
        }
      `}
    >
      {state && <Icon size="md" color="purple700" id="Full" />}
      <input
        id={props.id}
        tabIndex={-1}
        name={props.name}
        type="radio"
        checked={state ? true : false}
        hidden
      />
    </Box>
  );
};

export interface Props {
  state: boolean;
  label: string;
  labelProps?: TextInlineStyle;
}

const Radio = ({ state, label, ...props }: any) => {
  const id = nanoid();
  const control = <Control id={id} state={state} {...props} />;

  if (label) {
    return (
      <Inline alignY="center" gap="sm">
        {control}
        <Text
          as="label"
          htmlFor={id}
          weight="semiBold"
          {...props.labelProps}
          css={css`
            user-select: none;
            cursor: pointer;
          `}
        >
          {label}
        </Text>
      </Inline>
    );
  }

  return control;
};

export default Radio;
