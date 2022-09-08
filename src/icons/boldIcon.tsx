import { SVGProps, Ref, forwardRef } from "react";

const SvgBoldicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 11 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M8.6 6.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H0v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42ZM3 2.5h3c.83 0 1.5.67 1.5 1.5S6.83 5.5 6 5.5H3v-3Zm3.5 9H3v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5Z"
      fill={props.fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBoldicon);
export default ForwardRef;
