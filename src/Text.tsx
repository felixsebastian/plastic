import { PropsOf } from "@emotion/react";
import { Text as SpecimenText } from "@specimen/foundation";
import { forwardRef, Ref } from "react";
import useLightOnDark from "./useLightOnDark";

const Text = (props: PropsOf<typeof SpecimenText>, ref: Ref<HTMLElement>) => {
  const lod = useLightOnDark();
  return <SpecimenText ref={ref} color={lod ? "white" : "text"} {...props} />;
};

export default forwardRef(Text);
