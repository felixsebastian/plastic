import { SVGProps, Ref, forwardRef } from "react";

const SvgProcessManagericon = (
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
        d="M11 7.333H1V9h10V7.333ZM11 4H1v1.667h10V4ZM1 12.333h6.667v-1.666H1v1.666Zm16.25-3.75 1.25 1.25-5.825 5.834-3.758-3.75 1.25-1.25 2.508 2.5 4.575-4.584Z"
        id="process-manager_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      fillRule="nonzero"
      xlinkHref="#process-manager_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgProcessManagericon);
export default ForwardRef;
