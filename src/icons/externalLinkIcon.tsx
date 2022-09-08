import { SVGProps, Ref, forwardRef } from "react";

const SvgExternalLinkicon = (
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
        d="M16.222 16.222H3.778V3.778H10V2H3.778C2.79 2 2 2.8 2 3.778v12.444C2 17.2 2.791 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V10h-1.778v6.222ZM11.778 2v1.778h3.19l-8.737 8.738 1.253 1.253 8.738-8.738v3.191H18V2h-6.222Z"
        id="external-link_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#external-link_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgExternalLinkicon);
export default ForwardRef;
