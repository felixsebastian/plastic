import { SVGProps, Ref, forwardRef } from "react";

const SvgFiltericon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M2 14.444v1.778h5.333v-1.778H2ZM2 3.778v1.778h8.889V3.778H2ZM10.889 18v-1.778H18v-1.778h-7.111v-1.777H9.11V18h1.778ZM5.556 7.333v1.778H2v1.778h3.556v1.778h1.777V7.333H5.556ZM18 10.89V9.11H9.111v1.778H18Zm-5.333-3.556h1.777V5.556H18V3.778h-3.556V2h-1.777v5.333Z"
        id="filter_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} fillRule="nonzero" xlinkHref="#filter_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgFiltericon);
export default ForwardRef;
