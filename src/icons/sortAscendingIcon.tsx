import { SVGProps, Ref, forwardRef } from "react";

const SvgSortAscendingicon = (
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
      <path id="sort-ascending_icon_svg__a" d="m6 12 4-4 4 4z" />
    </defs>
    <use
      fill={fill}
      xlinkHref="#sort-ascending_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSortAscendingicon);
export default ForwardRef;
