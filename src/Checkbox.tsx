import { css } from "@emotion/react";
import { Box, Inline, Text, useTheme } from "@specimen/foundation";
import Icon from "./Icon";
import { nanoid } from "nanoid";

const Control = ({ state, ...props }: any) => {
  const { c, s } = useTheme();
  const toggle = () => props.handleChange?.(state === "OFF" ? true : false);

  return (
    <Box
      aria-hidden="true"
      handleClick={toggle}
      as="button"
      bg={state === "OFF" ? "white" : "gray500"}
      radius="sm"
      d="flex"
      w="lg"
      h="lg"
      htmlAttributes={{ type: "button" }}
      css={css(
        css`
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
        `,
        state !== "OFF" &&
        css`
            &:hover {
              background: ${c.purple800};
            }
          `
      )}
    >
      {state === "ON" && <Icon size="xl" color="white" id="Check" />}
      {state === "MIXED" && <Icon size="xl" color="white" id="Minus" />}
      <input
        id={props.id}
        tabIndex={-1}
        type="checkbox"
        checked={state === "ON" ? true : false}
        hidden
      />
    </Box>
  );
};

const Checkbox = ({ state, label, ...props }: any) => {
  if (!state) state = "OFF";
  if (state === true) state = "ON";
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

export default Checkbox;
