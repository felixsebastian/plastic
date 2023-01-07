import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackShareWhiteicon = (
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
        d="M16.4 2H3.6c-.884 0-1.592.716-1.592 1.6L2 18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 16.4 2Z"
        id="feedback-share-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#feedback-share-white_icon_svg__a" />
      <path
        d="M10.889 10.92V9.217c-2.222 0-3.778.664-4.889 2.115.444-2.073 1.778-4.147 4.889-4.562V5.11L14 8.015l-3.111 2.904Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackShareWhiteicon);
export default ForwardRef;
