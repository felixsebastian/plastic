import { SVGProps, Ref, forwardRef } from "react";

const SvgUnderlineicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 14 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M7 14c3.31 0 6-2.69 6-6V0h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S3.5 9.93 3.5 8V0H1v8c0 3.31 2.69 6 6 6Zm-7 2v2h14v-2H0Z"
      fill={props.fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUnderlineicon);
export default ForwardRef;
