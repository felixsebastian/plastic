import { SVGProps, Ref, forwardRef } from "react";

const SvgSkipWhiteicon = (
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
        id="skip-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#skip-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m6.8 12.935 4.272-3.068L6.8 6.8zM11.6 6.8v6.135h1.005V6.8z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgSkipWhiteicon);
export default ForwardRef;
