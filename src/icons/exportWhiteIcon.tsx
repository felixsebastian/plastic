import { SVGProps, Ref, forwardRef } from "react";

const SvgExportWhiteicon = (
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
        d="M15.827 8.446a5.94 5.94 0 0 0-5.824-4.78 5.944 5.944 0 0 0-5.266 3.196A4.754 4.754 0 0 0 .5 11.585a4.75 4.75 0 0 0 4.751 4.752h10.295a3.96 3.96 0 0 0 3.959-3.96c0-2.09-1.627-3.785-3.678-3.931Z"
        id="export-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#export-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m13.962 10.794-3.96 3.959-3.959-3.96H8.42V7.627h3.167v3.168z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgExportWhiteicon);
export default ForwardRef;
