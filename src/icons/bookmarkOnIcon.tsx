import { SVGProps, Ref, forwardRef } from "react";

const SvgBookmarkOnicon = (
  {
    fill,
    size,
    ...props
  }: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M15 1H5c-1.1 0-1.99.9-1.99 2L3 19l7-3 7 3V3c0-1.1-.9-2-2-2z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBookmarkOnicon);
export default ForwardRef;
