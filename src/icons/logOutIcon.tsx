import { SVGProps, Ref, forwardRef } from "react";

const SvgLogOuticon = (
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
        d="M9.556 13.667 14 9.5 9.556 5.333 8.302 6.508l2.294 2.159H2v1.666h8.596l-2.294 2.159 1.254 1.175ZM3.778 2C2.79 2 2 2.75 2 3.667V7h1.778V3.667h12.444v11.666H3.778V12H2v3.333C2 16.25 2.791 17 3.778 17h12.444C17.2 17 18 16.25 18 15.333V3.667C18 2.75 17.2 2 16.222 2H3.778Z"
        id="log-out_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#log-out_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgLogOuticon);
export default ForwardRef;
