import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaNegativeicon = (
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
    <path
      fill={fill}
      fillRule="evenodd"
      d="M6.775 16H16V6.775h-2.05V12.5L5.45 4 4 5.45l8.5 8.5H6.775V16z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaNegativeicon);
export default ForwardRef;
