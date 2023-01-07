import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackReviewWhiteicon = (
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
        d="M16.39 2H3.61c-.87 0-1.608.74-1.608 1.613V18l3.216-3.183H16.39c.87 0 1.608-.74 1.608-1.613V3.613C17.955 2.74 17.26 2 16.39 2Z"
        id="feedback-review-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#feedback-review-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M14.781 11.635H8.782l1.609-1.613h4.39zM5.218 11.635V9.672l5.478-5.492c.174-.175.39-.175.564 0l1.391 1.395c.174.174.174.392 0 .566l-5.476 5.494H5.218Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackReviewWhiteicon);
export default ForwardRef;
