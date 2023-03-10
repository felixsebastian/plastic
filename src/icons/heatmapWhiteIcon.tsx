import { SVGProps, Ref, forwardRef } from "react";

const SvgHeatmapWhiteicon = (
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
        d="M11.305 1s.644 2.236.644 4.05c0 1.738-1.174 3.148-2.967 3.148a3.117 3.117 0 0 1-3.158-3.147l.026-.312a11.417 11.417 0 0 0-2.81 7.51C3.04 15.977 6.156 19 10 19s6.96-3.023 6.96-6.751c0-4.557-2.254-8.608-5.655-11.249"
        id="heatmap-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#heatmap-white_icon_svg__a" />
      <path
        d="M9.748 16.469c-1.548 0-2.793-1.19-2.793-2.65 0-1.368.896-2.33 2.436-2.633 1.54-.305 3.132-1.021 4.02-2.177.339 1.087.504 2.235.504 3.408 0 2.228-1.861 4.052-4.167 4.052"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgHeatmapWhiteicon);
export default ForwardRef;
