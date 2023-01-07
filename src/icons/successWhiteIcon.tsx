import { SVGProps, Ref, forwardRef } from "react";

const SvgSuccessWhiteicon = (
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
        d="M10 2c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8Z"
        id="success-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#success-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m8.4 14-4-4 1.128-1.128L8.4 11.736l6.072-6.072L15.6 6.8z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgSuccessWhiteicon);
export default ForwardRef;
