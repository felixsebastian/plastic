import { SVGProps, Ref, forwardRef } from "react";

const SvgEqualWhiteicon = (
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
        d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Z"
        id="equal-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#equal-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M6.153 12.1h7.694v-1.6H6.153zM6.153 9.219h7.694v-1.6H6.153z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgEqualWhiteicon);
export default ForwardRef;
