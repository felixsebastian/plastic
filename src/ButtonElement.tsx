import { Box, BoxProps } from "@specimen/foundation";
import { forwardRef, ReactNode, Ref } from "react";
import useLightOnDark from "./useLightOnDark";
import useOutlineCss from "./useOutlineCss";

export interface Props extends BoxProps {
  children?: ReactNode;
}

const ButtonElement = (props: Props, ref: Ref<HTMLElement>) => {
  const lod = useLightOnDark();
  const outline = useOutlineCss(lod);

  return (
    <Box
      ref={ref}
      as="button"
      css={outline}
      {...props}
      htmlAttributes={{ type: "button", ...props.htmlAttributes }}
    >
      {props.children}
    </Box>
  );
};

export default forwardRef(ButtonElement);
