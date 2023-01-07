import { SVGProps, Ref, forwardRef } from "react";

const SvgArrowRighticon = (
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
        id="arrow-right_icon_svg__a"
        d="m12.5 5-1.18 1.18 2.988 2.986H2.5v1.666h11.808l-2.987 2.989L12.5 15l5-5z"
      />
    </defs>
    <use fill={fill} xlinkHref="#arrow-right_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowRighticon);
export default ForwardRef;
