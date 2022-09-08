import { SVGProps, Ref, forwardRef } from "react";

const SvgChevronLefticon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        id="chevron-left_icon_svg__a"
        d="M13.155 13.82 9.253 10l3.902-3.82L11.951 5l-5.106 5 5.106 5z"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#chevron-left_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronLefticon);
export default ForwardRef;
