import { SVGProps, Ref, forwardRef } from "react";

const SvgDashboardicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M10.889 7.333H18V2h-7.111v5.333ZM2 10.89h7.111V2H2v8.889ZM10.889 18H18V9.111h-7.111V18ZM2 18h7.111v-5.333H2V18Z"
        id="dashboard_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#dashboard_icon_svg__a"
      transform="translate(-2 -2)"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDashboardicon);
export default ForwardRef;
