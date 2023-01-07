import { SVGProps, Ref, forwardRef } from "react";

const SvgTimeicon = (
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
      d="M10 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8Zm3.36 11.36.64-1.04-3.6-2.16V6H9.2v4.8l4.16 2.56Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTimeicon);
export default ForwardRef;
