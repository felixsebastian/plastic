import { SVGProps, Ref, forwardRef } from "react";

const SvgTextAnalyticsWhiteicon = (
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
        d="M1.57 0C.698 0 0 .698 0 1.613V17l3.183-3.226h11.204c.872 0 1.613-.698 1.613-1.613V1.57C15.957.698 15.26 0 14.387 0H1.57Z"
        id="text-analytics-white_icon_svg__a"
      />
    </defs>
    <g transform="translate(2 2)" fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#text-analytics-white_icon_svg__a" />
      <circle fill="#FFF" cx={6} cy={5} r={3} />
      <circle fill="#FFF" cx={12} cy={6} r={2} />
      <circle fill="#FFF" cx={8.5} cy={10.5} r={1.5} />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgTextAnalyticsWhiteicon);
export default ForwardRef;
