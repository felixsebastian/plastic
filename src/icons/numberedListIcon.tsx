import { SVGProps, Ref, forwardRef } from "react";

const SvgNumberedListicon = (
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
    viewBox="0 0 19 16"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M0 13h2v.5H1v1h1v.5H0v1h3v-4H0v1Zm1-9h1V0H0v1h1v3ZM0 7h1.8L0 9.1v.9h3V9H1.2L3 6.9V6H0v1Zm5-6v2h14V1H5Zm0 14h14v-2H5v2Zm0-6h14V7H5v2Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgNumberedListicon);
export default ForwardRef;
