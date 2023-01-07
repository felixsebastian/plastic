import { SVGProps, Ref, forwardRef } from "react";

const SvgSearchicon = (
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
        d="M13.435 12.063h-.723l-.256-.247a5.92 5.92 0 0 0 1.437-3.87 5.946 5.946 0 1 0-5.947 5.947 5.92 5.92 0 0 0 3.87-1.437l.247.256v.723L16.637 18 18 16.637l-4.565-4.574Zm-5.489 0A4.111 4.111 0 0 1 3.83 7.946 4.111 4.111 0 0 1 7.946 3.83a4.111 4.111 0 0 1 4.117 4.116 4.111 4.111 0 0 1-4.117 4.117Z"
        id="search_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#search_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgSearchicon);
export default ForwardRef;
