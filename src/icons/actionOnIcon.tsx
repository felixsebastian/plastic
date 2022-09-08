import { SVGProps, Ref, forwardRef } from "react";

const SvgActionOnicon = (
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
        id="action-on_icon_svg__a"
        d="m3.699 10.469 5.271-.143L8.53 19l7.771-13.195H11.72l2.004-4.784L7.947 1z"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#action-on_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgActionOnicon);
export default ForwardRef;
