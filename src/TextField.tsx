import { css } from "@emotion/react";
import { Box, BoxProps, Inline, Stack, useTheme } from "@specimen/foundation";
import Text from "./Text";
import { nanoid } from "nanoid";
import useLightOnDark from "./useLightOnDark";
import { Provider as LodProvider } from "./lightOnDarkContext";
import { getOutlineBoxProps } from "./useOutlineCss";
import Icon from "./Icon";
import { ChangeEvent } from "react";

type State = "normal" | "positive" | "negative" | "cautionary";

const useLabelColor = (disabled: boolean) => {
  const lod = useLightOnDark();
  const { color } = useTheme();

  if (!disabled) {
    if (lod) return "white";
    return "text";
  } else {
    if (lod) return color("white").rgba(0.4);
    return "gray400";
  }
};

const useHintColor = (disabled: boolean) => {
  const lod = useLightOnDark();
  const { color } = useTheme();

  if (!disabled) {
    if (lod) return color("white").rgba(0.6);
    return "gray500";
  } else {
    if (lod) return "gray400";
    return "gray500";
  }
};

const useBoxShadowColor = (disabled: boolean, state: State) => {
  const lod = useLightOnDark();
  const { c, color } = useTheme();

  if (!disabled) {
    switch (state) {
      case "normal":
      case "positive":
        if (lod) return color("white").rgba(0.6);
        return c.gray500;
      case "negative":
        if (lod) return c.red300;
        return c.red500;
      case "cautionary":
        if (lod) return c.yellow300;
        return c.yellow600;
    }
  } else {
    if (lod) return color("white").rgba(0.2);
    return c.gray400;
  }
};

const useMessageBgColor = (state: State) => {
  const lod = useLightOnDark();

  if (state === "cautionary") {
    if (lod) return "yellow400";
    return "yellow100";
  }

  if (lod) return "red300";
  return "red100";
};

const useMessageIconColor = (state: State) => {
  const lod = useLightOnDark();
  if (lod) return "text";
  if (state === "cautionary") return "yellow500";
  return "red500";
};

interface NoMessageProps {
  state?: "normal" | "positive";
  message?: never;
  disabled?: boolean;
}

interface MessageProps {
  state: "negative" | "cautionary";
  message: string;
  disabled?: never;
}

interface StaticProps extends BoxProps {
  label?: string;
  hint?: string;
  value?: string;
  handleChange?: (value: string) => void;
}

type Props = StaticProps & (MessageProps | NoMessageProps);

const Message = ({ state, message }: any) => {
  const messageBgColor = useMessageBgColor(state);
  const messageIconColor = useMessageIconColor(state);

  return (
    <Inline bg={messageBgColor} p="sm" alignY="center" radius="sm" gap="sm">
      <LodProvider value={false}>
        <Icon id="Exclamation" size="lg" color={messageIconColor} />
        <Text size="sm">{message}</Text>
      </LodProvider>
    </Inline>
  );
};

const TextField = ({
  label,
  hint,
  state = "normal",
  message,
  disabled = false,
  ...props
}: Props) => {
  const lod = useLightOnDark();
  const theme = useTheme();
  const { s, c, fonts, defaultFont } = theme;
  const id = nanoid();
  const hintColor = useHintColor(disabled);
  const labelColor = useLabelColor(disabled);
  const boxShadowColor = useBoxShadowColor(disabled, state);

  const input = (
    <div
      css={css`
        position: relative;
        &:focus-within .focus-box {
          display: block;
        }
      `}
    >
      <div
        className="focus-box"
        css={css(
          css`
            display: none;
          `,
          getOutlineBoxProps(theme, lod)
        )}
      />
      <Box
        as="input"
        bg={lod ? "transparent" : "white"}
        radius="sm"
        p="md"
        w="full"
        h="2xl"
        {...props}
        htmlAttributes={{
          id,
          disabled,
          type: "text",
          value: props.value,
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            props.handleChange?.(e.target.value),
          ...props.htmlAttributes,
        }}
        className={`${props.className} ${lod ? " lod" : ""}`}
        css={css`
          position: relative;
          display: block;
          color: ${c[lod ? "white" : "text"]};
          border: none;
          box-shadow: 0 0 0 ${s.xxs} ${boxShadowColor} inset;
          font-family: ${fonts[defaultFont].name};
          font-size: 1.1rem;
          outline: none;
          &:hover::not(:disabled) {
            background: ${c.gray100};
          }
        `}
      />
    </div>
  );

  if (!label && !hint && !message) return input;

  return (
    <Stack gap="sm">
      <Text
        color={labelColor}
        size="sm"
        weight="semiBold"
        as="label"
        htmlAttributes={{ htmlFor: id }}
      >
        {label}
      </Text>
      {input}
      {message && <Message state={state} message={message} />}
      <Text color={hintColor} size="sm">
        {hint}
      </Text>
    </Stack>
  );
};

export default TextField;
