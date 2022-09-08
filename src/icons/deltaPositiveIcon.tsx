import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaPositiveicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 20 20"
    ref={ref}
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="evenodd"
      d="M6.775 4H16v9.225h-2.05V7.5L5.45 16 4 14.55l8.5-8.5H6.775V4z"
      clipRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaPositiveicon);
export default ForwardRef;
