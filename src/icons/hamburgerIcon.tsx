import { SVGProps, Ref, forwardRef } from "react";

const SvgHamburgericon = (
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
        d="M2 16h16v-2H2v2Zm0-5h16V9H2v2Zm0-7v2h16V4H2Z"
        id="hamburger_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      fillRule="nonzero"
      xlinkHref="#hamburger_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgHamburgericon);
export default ForwardRef;
