import { css } from "@emotion/react";
import { Box, BoxProps, useTheme } from "@specimen/foundation";
import { pick } from "lodash";
import { forwardRef, Ref } from "react";
import ButtonElement from "./ButtonElement";
import ButtonVariant from "./ButtonVariant";
import useButtonStyle from "./useButtonStyle";
import useLightOnDark from "./useLightOnDark";
import useOutlineCss from "./useOutlineCss";
import WithChildren from "./WithChildren";

interface AsLinkProps {
  asLink: true;
  to: string;
  newWindow?: boolean;
}

interface AsButtonProps extends BoxProps {
  asLink?: false;
}

interface BasicProps extends WithChildren {
  className?: string;
  variant?: ButtonVariant;
}

type Props = (AsLinkProps | AsButtonProps) & BasicProps;
export type NonLinkProps = AsButtonProps & BasicProps;
export type ButtonBoxProps = Props;

const ButtonBox = (props: Props, ref: Ref<HTMLElement>) => {
  const { c } = useTheme();
  const { shadow, bgHover, ...styleProps } = useButtonStyle(props.variant);
  const lod = useLightOnDark();
  const outline = useOutlineCss(lod);

  const baseCss = css`
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
  `;

  const commonProps = {
    ref,
    px: "lg",
    bg: styleProps.bg ?? "transparent",
    h: "2xl",
    radius: "sm",
    d: "flex",
    ...pick(props, ["className", "children", "handleClick"]),
  } as const;

  if (props.asLink) {
    return (
      <Box
        as="a"
        htmlAttributes={{
          href: props.to,
          target: props.newWindow ? "_blank" : undefined,
        }}
        {...commonProps}
        css={css(
          baseCss,
          outline,
          css`
            cursor: pointer;
          `
        )}
        {...props}
      />
    );
  } else {
    return <ButtonElement {...commonProps} css={baseCss} {...props} />;
  }
};

export default forwardRef(ButtonBox);
