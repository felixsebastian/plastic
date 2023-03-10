import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackReportWhiteicon = (
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
        d="M16.386 2H3.57C2.697 2 2 2.697 2 3.612V18l3.182-3.227h11.204c.873 0 1.613-.697 1.613-1.613V3.57C17.957 2.696 17.26 2 16.386 2Z"
        id="feedback-report-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#feedback-report-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M12.376 12.375h2.049V9.193h-2.05zM9.15 12.375h2.049V4.397h-2.05zM5.531 12.375H7.58v-5.58H5.53z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackReportWhiteicon);
export default ForwardRef;
