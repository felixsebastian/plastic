import { SVGProps, Ref, forwardRef } from "react";

const SvgChevronRighticon = (
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
        id="chevron-right_icon_svg__a"
        d="M6.845 13.82 10.747 10 6.845 6.18 8.049 5l5.106 5-5.106 5z"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#chevron-right_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronRighticon);
export default ForwardRef;
