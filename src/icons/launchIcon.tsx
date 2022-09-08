import { SVGProps, Ref, forwardRef } from "react";

const SvgLaunchicon = (
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
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8ZM8.4 13.6l4.8-3.6-4.8-3.6v7.2Z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgLaunchicon);
export default ForwardRef;
