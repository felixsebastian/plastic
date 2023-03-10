import { SVGProps, Ref, forwardRef } from "react";

const SvgFlagOffWhiteicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={props.fill}
        d="M11.788 3.882 11.412 2h-8.47v16h1.882v-6.588h5.27l.377 1.882h6.588V3.882z"
      />
      <path
        fill="#FFF"
        d="M4.825 3.878h5.012l.515 1.871h4.86l.01 5.654h-2.945l-.451-1.837-7.001-.02z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFlagOffWhiteicon);
export default ForwardRef;
