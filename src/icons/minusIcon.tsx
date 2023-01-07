import { SVGProps, Ref, forwardRef } from "react";

const SvgMinusicon = (
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
      <path id="minus_icon_svg__a" d="M13.996 10.833H6.011V9.167h7.985z" />
    </defs>
    <use fill={fill} xlinkHref="#minus_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgMinusicon);
export default ForwardRef;
