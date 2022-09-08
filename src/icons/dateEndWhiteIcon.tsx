import { SVGProps, Ref, forwardRef } from "react";

const SvgDateEndWhiteicon = (
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
        d="M13.557 1.111V2.89H6.445V1.111H4.667V2.89h-.889a1.77 1.77 0 0 0-1.77 1.778L2 17.113c0 .982.796 1.778 1.778 1.778h12.446c.982 0 1.778-.796 1.778-1.778V4.667c0-.982-.796-1.778-1.778-1.778h-.889V1.111h-1.778Z"
        id="date-end-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#date-end-white_icon_svg__a" />
      <path fill="#FFF" d="M16.224 17.113H3.778V7.334h12.446z" />
      <path fill={props.fill} d="M14.446 10.89h-4.445v4.445h4.445z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDateEndWhiteicon);
export default ForwardRef;
