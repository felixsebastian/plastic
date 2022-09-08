import { SVGProps, Ref, forwardRef } from "react";

const SvgGridViewicon = (
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
        d="M6.008 15.016v-4h-4v4h4Zm5.986 0v-4h-4v4h4Zm5.991 0v-4h-4v4h4ZM6.008 9V5h-4v4h4Zm5.986 0V5h-4v4h4Zm1.991 0h4V5h-4v4Z"
        id="grid-view_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#grid-view_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgGridViewicon);
export default ForwardRef;
