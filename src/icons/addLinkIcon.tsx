import { SVGProps, Ref, forwardRef } from "react";

const SvgAddLinkicon = (
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
    viewBox="0 0 20 10"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M1.9 5c0-1.71 1.39-3.1 3.1-3.1h4V0H5C2.24 0 0 2.24 0 5s2.24 5 5 5h4V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6h8V4H6v2Zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V10h4c2.76 0 5-2.24 5-5s-2.24-5-5-5Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgAddLinkicon);
export default ForwardRef;
