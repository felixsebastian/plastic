import { css } from "@emotion/react";
import { BoxProps, useTheme } from "@specimen/foundation";
import { forwardRef, ReactNode, Ref } from "react";
import ButtonElement from "./ButtonElement";
import useButtonStyle from "./useButtonStyle";

export interface Props extends BoxProps {
  children?: ReactNode;
  variant?: string;
}

const ButtonBox = ({ variant, ...props }: Props, ref: Ref<HTMLElement>) => {
  const { c } = useTheme();
  const { shadow, bgHover, ...styleProps } = useButtonStyle(variant);

  return (
    <ButtonElement
      ref={ref}
      px="lg"
      bg={styleProps.bg ?? "transparent"}
      h="2xl"
      radius="sm"
      d="flex"
      {...props}
      css={css`
        position: relative;
        justify-content: center;
        box-shadow: ${shadow ?? "none"};
        box-sizing: border-box;
        transition: 100ms ease background-color;
        &:focus-visible {
          ${bgHover ? `background-color: ${c[bgHover]};` : ""};
        }
        &:hover {
          ${bgHover ? `background-color: ${c[bgHover]};` : ""};
          box-shadow: ${styleProps.shadowHover ?? "none"};
        }
      `}
    >
      {props.children}
    </ButtonElement>
  );
};

export default forwardRef(ButtonBox);
