import { SVGProps, Ref, forwardRef } from "react";

const SvgArrowLefticon = (
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
        id="arrow-left_icon_svg__a"
        d="M17.5 9.167H5.692l2.987-2.988L7.5 5l-5 5 5 5 1.18-1.18-2.988-2.987H17.5z"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#arrow-left_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowLefticon);
export default ForwardRef;
