import { SVGProps, Ref, forwardRef } from "react";

const SvgPowericon = (
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
        d="M9.111 10.889h1.778V2H9.11v8.889Zm6.076-6.965-1.258 1.258A6.21 6.21 0 0 1 16.222 10a6.223 6.223 0 0 1-12.444 0A6.21 6.21 0 0 1 6.07 5.182L4.813 3.924A7.972 7.972 0 0 0 2 10a8 8 0 0 0 16 0 7.972 7.972 0 0 0-2.813-6.076Z"
        id="power_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#power_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgPowericon);
export default ForwardRef;
