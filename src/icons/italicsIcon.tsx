import { SVGProps, Ref, forwardRef } from "react";

const SvgItalicsicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M4 0v3h2.21l-3.42 8H0v3h8v-3H5.79l3.42-8H12V0H4Z"
      fill={props.fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgItalicsicon);
export default ForwardRef;
