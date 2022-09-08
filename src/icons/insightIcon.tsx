import { SVGProps, Ref, forwardRef } from "react";

const SvgInsighticon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 12 16"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M7.603 10.8c0 1.328 1.072 2.4 2.4 2.4 1.328 0 2.4-1.072 2.4-2.4 0-1.328-1.072-2.4-2.4-2.4a2.397 2.397 0 0 0-2.4 2.4Zm8.4 5.272V6.8l-4.4-4.8H5.598c-.88 0-1.592.72-1.592 1.6l-.008 12.8c0 .88.712 1.6 1.592 1.6h8.812c.36 0 .68-.12.952-.32l-3.143-3.544A4.001 4.001 0 0 1 6.003 10.8c0-2.208 1.792-4 4-4s4 1.792 4 4c0 .816-.248 1.568-.664 2.2l2.663 3.072Z"
        id="insight_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#insight_icon_svg__a"
      transform="translate(-4 -2)"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgInsighticon);
export default ForwardRef;
