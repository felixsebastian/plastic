import { SVGProps, Ref, forwardRef } from "react";

const SvgSubtractWhiteicon = (
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
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
        id="subtract-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#subtract-white_icon_svg__a" />
      <path fill="#FFF" d="M14 10.8H6V9.2h8z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgSubtractWhiteicon);
export default ForwardRef;
