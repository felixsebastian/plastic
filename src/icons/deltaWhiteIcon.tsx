import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaWhiteicon = (
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
        d="M2 10c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8-8 3.58-8 8Z"
        id="delta-white_icon_svg__a"
      />
    </defs>
    <g fill="none">
      <use fill={props.fill} xlinkHref="#delta-white_icon_svg__a" />
      <path fill={props.fill} d="m10 5.37-5.018 8.028h10.036z" />
      <path fill={props.fill} d="M12.131 11.771H7.87L10 8.36z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaWhiteicon);
export default ForwardRef;
