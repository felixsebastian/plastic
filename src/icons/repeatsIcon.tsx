import { SVGProps, Ref, forwardRef } from "react";

const SvgRepeatsicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 18 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M4 5h10v3l4-4-4-4v3H2v6h2V5zm10 10H4v-3l-4 4 4 4v-3h12v-6h-2v4z"
        fill={props.fill}
        id="repeats_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#repeats_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRepeatsicon);
export default ForwardRef;
