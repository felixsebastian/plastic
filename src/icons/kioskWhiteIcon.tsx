import { SVGProps, Ref, forwardRef } from "react";

const SvgKioskWhiteicon = (
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
        d="M14.353 2H5.677c-.92 0-1.667.747-1.667 1.667v12.666c0 .92.747 1.667 1.667 1.667h8.676c.92 0 1.667-.747 1.667-1.667V3.667c0-.92-.433-1.667-1.353-1.667h-.314Z"
        id="kiosk-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#kiosk-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M5 14.667h10V4H5zM9 16.333c0-.553.446-1 1-1s1 .447 1 1c0 .553-.446 1-1 1s-1-.447-1-1Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgKioskWhiteicon);
export default ForwardRef;
