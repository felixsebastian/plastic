import { SVGProps, Ref, forwardRef } from "react";

const SvgDateStartWhiteicon = (
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
        d="M16.224 2.89h-.889V1.11h-1.778V2.89H6.445V1.111H4.667V2.89h-.889c-.987 0-1.77.8-1.77 1.778L2 17.113c0 .978.791 1.778 1.778 1.778h12.446c.978 0 1.778-.8 1.778-1.778V4.667c0-.978-.8-1.778-1.778-1.778Z"
        id="date-start-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#date-start-white_icon_svg__a" />
      <path fill="#FFF" d="M16.224 17.113H3.778V7.334h12.446z" />
      <path fill={fill} d="M5.556 9.112h4.445v4.445H5.556z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDateStartWhiteicon);
export default ForwardRef;
