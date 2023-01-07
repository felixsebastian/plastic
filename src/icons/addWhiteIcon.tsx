import { SVGProps, Ref, forwardRef } from "react";

const SvgAddWhiteicon = (
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
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Z"
        id="add-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#add-white_icon_svg__a" />
      <path fill="#FFF" d="M14 10.8h-3.2V14H9.2v-3.2H6V9.2h3.2V6h1.6v3.2H14z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgAddWhiteicon);
export default ForwardRef;
