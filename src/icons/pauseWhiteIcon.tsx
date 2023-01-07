import { SVGProps, Ref, forwardRef } from "react";

const SvgPauseWhiteicon = (
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
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
        id="pause-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#pause-white_icon_svg__a" />
      <path fill="#FFF" d="M9.2 13.2H7.6V6.8h1.6zM12.4 13.2h-1.6V6.8h1.6z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgPauseWhiteicon);
export default ForwardRef;
