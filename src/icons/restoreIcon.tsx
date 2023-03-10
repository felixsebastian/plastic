import { SVGProps, Ref, forwardRef } from "react";

const SvgRestoreicon = (
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
      d="M11.286 2C7.026 2 3.57 5.425 3.57 9.65H1l3.334 3.307.06.118L7.857 9.65H5.286c0-3.29 2.683-5.95 6-5.95s6 2.66 6 5.95-2.683 5.95-6 5.95a5.977 5.977 0 0 1-4.235-1.751l-1.217 1.207a7.708 7.708 0 0 0 5.452 2.244c4.26 0 7.714-3.425 7.714-7.65C19 5.425 15.546 2 11.286 2Zm-.857 4.25v4.25l3.668 2.159.617-1.028-3-1.769V6.25H10.43Z"
      fill={fill}
      fillRule="nonzero"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRestoreicon);
export default ForwardRef;
