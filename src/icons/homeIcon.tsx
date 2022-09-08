import { SVGProps, Ref, forwardRef } from "react";

const SvgHomeicon = (
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
        id="home_icon_svg__a"
        d="M8.118 18v-5.647h3.764V18h4.706v-7.53h2.824L10 2 .588 10.47h2.824V18z"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#home_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgHomeicon);
export default ForwardRef;
