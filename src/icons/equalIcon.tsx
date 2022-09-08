import { SVGProps, Ref, forwardRef } from "react";

const SvgEqualicon = (
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
      d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8ZM6.153 12.1h7.694v-1.6H6.153v1.6Zm0-2.881h7.694v-1.6H6.153v1.6Z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgEqualicon);
export default ForwardRef;
