import { SVGProps, Ref, forwardRef } from "react";

const SvgUsericon = (
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
        d="M10 12c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4"
        id="user_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#user_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgUsericon);
export default ForwardRef;
