import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaFlaticon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path fill={props.fill} d="M4 9h12v2H4V9z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaFlaticon);
export default ForwardRef;
