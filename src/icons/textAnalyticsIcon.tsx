import { SVGProps, Ref, forwardRef } from "react";

const SvgTextAnalyticsicon = (
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
      d="M3.57 2h12.817c.872 0 1.57.698 1.613 1.57v10.59c0 .916-.74 1.614-1.613 1.614H5.183L2 19V3.613C2 2.698 2.698 2 3.57 2ZM8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgTextAnalyticsicon);
export default ForwardRef;
