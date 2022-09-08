import { SVGProps, Ref, forwardRef } from "react";

const SvgFullicon = (
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
        d="M2 10c0 4.416 3.584 8 8 8s8-3.584 8-8-3.584-8-8-8-8 3.584-8 8Z"
        id="full_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#full_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgFullicon);
export default ForwardRef;
