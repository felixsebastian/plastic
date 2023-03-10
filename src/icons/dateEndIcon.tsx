import { SVGProps, Ref, forwardRef } from "react";

const SvgDateEndicon = (
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
        d="M13.557 1.111h1.778V2.89h.889c.982 0 1.778.796 1.778 1.778v12.446c0 .982-.796 1.778-1.778 1.778H3.778A1.778 1.778 0 0 1 2 17.113l.009-12.446A1.77 1.77 0 0 1 3.778 2.89h.889V1.111h1.778V2.89h7.112V1.111Zm2.667 16.002V7.334H3.778v9.78h12.446Zm-1.778-6.223h-4.445v4.445h4.445V10.89Z"
        id="date-end_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#date-end_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgDateEndicon);
export default ForwardRef;
