import { SVGProps, Ref, forwardRef } from "react";

const SvgOrganizationicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10 5.6V2H1v16.2h18V5.6h-9ZM4.6 16.4H2.8v-1.8h1.8v1.8Zm0-3.6H2.8V11h1.8v1.8Zm0-3.6H2.8V7.4h1.8v1.8Zm0-3.6H2.8V3.8h1.8v1.8Zm3.6 10.8H6.4v-1.8h1.8v1.8Zm0-3.6H6.4V11h1.8v1.8Zm0-3.6H6.4V7.4h1.8v1.8Zm0-3.6H6.4V3.8h1.8v1.8Zm9 10.8H10v-1.8h1.8v-1.8H10V11h1.8V9.2H10V7.4h7.2v9Zm-1.8-7.2h-1.8V11h1.8V9.2Zm0 3.6h-1.8v1.8h1.8v-1.8Z"
      fill={props.fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgOrganizationicon);
export default ForwardRef;
