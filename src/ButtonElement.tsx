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
    <Box ref={ref} as="button" type="button" css={outline} {...props}>
      {props.children}
    </Box>
  );
};

export default forwardRef(ButtonElement);
