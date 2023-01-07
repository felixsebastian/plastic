import { SVGProps, Ref, forwardRef } from "react";

const SvgArrowDownicon = (
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
        id="arrow-down_icon_svg__a"
        d="m16 8-1.057-1.058-4.193 4.185V2h-1.5v9.127L5.065 6.935 4 8l6 6z"
      />
    </defs>
    <use fill={fill} xlinkHref="#arrow-down_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowDownicon);
export default ForwardRef;
