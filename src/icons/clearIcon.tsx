import { SVGProps, Ref, forwardRef } from "react";

const SvgClearicon = (
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
        d="M10 2c-4.424 0-8 3.576-8 8 0 4.424 3.576 8 8 8 4.424 0 8-3.576 8-8 0-4.424-3.576-8-8-8Zm4 10.872L12.872 14 10 11.128 7.128 14 6 12.872 8.872 10 6 7.128 7.128 6 10 8.872 12.872 6 14 7.128 11.128 10 14 12.872Z"
        id="clear_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#clear_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgClearicon);
export default ForwardRef;
