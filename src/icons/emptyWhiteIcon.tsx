import { SVGProps, Ref, forwardRef } from "react";

const SvgEmptyWhiteicon = (
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
        d="M10 2c4.416 0 8 3.584 8 8s-3.584 8-8 8-8-3.584-8-8 3.584-8 8-8Z"
        fill={fill}
      />
      <path
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgEmptyWhiteicon);
export default ForwardRef;
