import { SVGProps, Ref, forwardRef } from "react";

const SvgExclamationOctagonicon = (
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
        d="M13.316 2H6.684L2 6.684v6.632L6.684 18h6.632L18 13.316V6.684L13.316 2ZM10 14.711c-.64 0-1.156-.515-1.156-1.155S9.36 12.4 10 12.4c.64 0 1.156.516 1.156 1.156 0 .64-.516 1.155-1.156 1.155Zm.889-3.822H9.11V5.556h1.778v5.333Z"
        id="exclamation-octagon_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      fillRule="nonzero"
      xlinkHref="#exclamation-octagon_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgExclamationOctagonicon);
export default ForwardRef;
