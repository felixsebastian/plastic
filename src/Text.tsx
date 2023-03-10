import { Text as SpecimenText, TextProps } from "@specimen/foundation";
import { ForwardedRef, forwardRef } from "react";
import useLightOnDark from "./useLightOnDark";

interface Props extends TextProps {
  dummy?: never;
}

const Text = (props: Props, ref: ForwardedRef<HTMLElement>) => {
  const lod = useLightOnDark();
  return <SpecimenText ref={ref} color={lod ? "white" : "text"} {...props} />;
};

export default forwardRef(Text);
