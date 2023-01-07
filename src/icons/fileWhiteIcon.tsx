import { SVGProps, Ref, forwardRef } from "react";

const SvgFileWhiteicon = (
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
        d="M11.613 2H5.598c-.884 0-1.592.716-1.592 1.6l-.008 12.8c0 .884.708 1.6 1.592 1.6h8.812a1.6 1.6 0 0 0 1.6-1.6V6.657L11.613 2Z"
        id="file-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#file-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M10.813 7.6V3.2l4.4 4.4zM6.813 11.6h6.4V10h-6.4zM6.813 14.8h6.4v-1.6h-6.4z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFileWhiteicon);
export default ForwardRef;
