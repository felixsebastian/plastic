import { SVGProps, Ref, forwardRef } from "react";

const SvgUserSelecticon = (
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
        d="M6.876 10a3.332 3.332 0 1 1 0-6.665 3.332 3.332 0 1 1 0 6.665Zm12.913-3.063-5.138 5.146-3.316-3.308 1.104-1.103 2.212 2.206 4.036-4.044 1.102 1.103Zm-12.913 4.73c2.224 0 6.665 1.116 6.665 3.332v1.666H.21v-1.666c0-2.216 4.44-3.333 6.665-3.333Z"
        id="user-select_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#user-select_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserSelecticon);
export default ForwardRef;
