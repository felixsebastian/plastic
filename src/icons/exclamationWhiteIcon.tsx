import { SVGProps, Ref, forwardRef } from "react";

const SvgExclamationWhiteicon = (
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
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
        id="exclamation-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#exclamation-white_icon_svg__a" />
      <path fill="#FFF" d="M10.8 14H9.2v-1.6h1.6zM10.8 10.8H9.2V6h1.6z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgExclamationWhiteicon);
export default ForwardRef;
