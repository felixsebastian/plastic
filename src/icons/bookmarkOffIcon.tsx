import { SVGProps, Ref, forwardRef } from "react";

const SvgBookmarkOfficon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M15 1H5c-1.1 0-1.99.9-1.99 2L3 19l7-3 7 3V3c0-1.1-.9-2-2-2zm0 15-5-2.18L5 16V3h10v13z"
      fill={props.fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBookmarkOfficon);
export default ForwardRef;
