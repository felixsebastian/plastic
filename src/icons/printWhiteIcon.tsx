import { SVGProps, Ref, forwardRef } from "react";

const SvgPrintWhiteicon = (
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
    <g fill="none" fillRule="evenodd">
      <path
        d="M15.6 6.8H4.4A2.397 2.397 0 0 0 2 9.2V14h3.2v3.2h9.6V14H18V9.2c0-1.328-1.072-2.4-2.4-2.4ZM5.2 6h9.6V2.8H5.2z"
        fill={fill}
      />
      <path
        d="M15.6 10c-.44 0-.8-.36-.8-.8 0-.44.36-.8.8-.8.44 0 .8.36.8.8 0 .44-.36.8-.8.8ZM6.8 15.6h6.4v-4H6.8z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgPrintWhiteicon);
export default ForwardRef;
