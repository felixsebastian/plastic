import { SVGProps, Ref, forwardRef } from "react";

const SvgInformationWhiteicon = (
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
        id="information-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#information-white_icon_svg__a" />
      <path fill="#FFF" d="M9.2 7.6h1.6V6H9.2zM9.2 14h1.6V9.2H9.2z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgInformationWhiteicon);
export default ForwardRef;
