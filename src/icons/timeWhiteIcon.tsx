import { SVGProps, Ref, forwardRef } from "react";

const SvgTimeWhiteicon = (
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
        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z"
        id="time-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#time-white_icon_svg__a" />
      <path fill="#FFF" d="M13.36 13.36 9.2 10.8V6h1.2v4.16l3.6 2.16z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgTimeWhiteicon);
export default ForwardRef;
