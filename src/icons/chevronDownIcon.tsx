import { SVGProps, Ref, forwardRef } from "react";

const SvgChevronDownicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="3 3 14 14"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        id="chevron-down_icon_svg__a"
        d="M6.18 6.845 10 10.747l3.82-3.902L15 8.049l-5 5.106-5-5.106z"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#chevron-down_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronDownicon);
export default ForwardRef;
