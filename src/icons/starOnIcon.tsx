import { SVGProps, Ref, forwardRef } from "react";

const SvgStarOnicon = (
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
        id="star-on_icon_svg__a"
        d="m18.667 8.033-5.992-.516L10.333 2 7.992 7.525 2 8.033l4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858z"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#star-on_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgStarOnicon);
export default ForwardRef;
