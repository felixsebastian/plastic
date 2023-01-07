import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaFlaticon = (
  {
    fill,
    size,
    ...props
  }: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path fill={fill} d="M4 9h12v2H4V9z" />
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaFlaticon);
export default ForwardRef;
