import { SVGProps, Ref, forwardRef } from "react";

const SvgSkipicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8ZM6.8 12.935l4.272-3.068L6.8 6.8v6.135ZM11.6 6.8v6.135h1.005V6.8H11.6Z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSkipicon);
export default ForwardRef;
