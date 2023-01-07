import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaBareWhiteicon = (
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
      <path id="delta-bare-white_icon_svg__a" d="m10.482 3.37-8 12.8h16z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#delta-bare-white_icon_svg__a" />
      <path fill="#FFF" d="M15.181 14.199H5.783l4.7-7.523z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaBareWhiteicon);
export default ForwardRef;
