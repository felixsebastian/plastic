import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackReporticon = (
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
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M16.386 2c.873 0 1.57.697 1.613 1.57v9.59c0 .916-.74 1.613-1.613 1.613H5.182L2 18V3.612C2 2.697 2.697 2 3.57 2h12.816Zm-4.01 10.375h2.049V9.193h-2.05v3.182Zm-3.227 0h2.05V4.397h-2.05v7.978Zm-3.618 0H7.58v-5.58H5.53v5.58Z"
        id="feedback-report_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#feedback-report_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackReporticon);
export default ForwardRef;
