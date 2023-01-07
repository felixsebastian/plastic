import { SVGProps, Ref, forwardRef } from "react";

const SvgFactorsicon = (
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
        d="m12.8 14.496-2.8-2.94-2.8 2.94a2.667 2.667 0 1 1-1.144-1.44L9.11 10V7.173C8.08 6.8 7.333 5.823 7.333 4.667A2.663 2.663 0 0 1 10 2a2.663 2.663 0 0 1 2.667 2.667c0 1.155-.747 2.133-1.778 2.506V10l3.056 3.056a2.667 2.667 0 1 1-1.144 1.44Z"
        id="factors_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#factors_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgFactorsicon);
export default ForwardRef;
