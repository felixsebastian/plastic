import { css } from "@emotion/react";
import { useTheme, TShirtSizes, useIsInline } from "@specimen/foundation";
import { round } from "lodash";
import * as allIcons from "./icons";

export type Icon = keyof typeof allIcons;

interface Props {
  id: Icon;
  color?: string;
  size?: TShirtSizes;
  inline?: boolean;
  className?: string;
}

const Icon = (props: Props) => {
  const { color, fontSize } = useTheme();
  const Icon = allIcons[props.id];
  const isInline = useIsInline();
  const inline = props.inline ?? isInline;

  return (
    <Icon
      size={round(fontSize(props.size ?? "md").raw * 1.5) + "px"}
      fill={color(props.color ?? "text").hex}
      className={props.className}
      css={css`
        display: ${inline ? "inline" : "block"};
      `}
    />
  );
};

export default Icon;
