import { SVGProps, Ref, forwardRef } from "react";

const SvgChevronUpicon = (
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
        id="chevron-up_icon_svg__a"
        d="M6.179 13.155 10 9.253l3.821 3.902 1.18-1.204L10 6.845l-5 5.106z"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#chevron-up_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgChevronUpicon);
export default ForwardRef;
