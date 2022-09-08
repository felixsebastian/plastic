import { SVGProps, Ref, forwardRef } from "react";

const SvgDateStarticon = (
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
        d="M16.224 2.89c.978 0 1.778.8 1.778 1.777v12.446c0 .978-.8 1.778-1.778 1.778H3.778c-.987 0-1.778-.8-1.778-1.778l.009-12.446A1.77 1.77 0 0 1 3.778 2.89h.889V1.111h1.778V2.89h7.112V1.111h1.778V2.89h.889Zm0 14.223V7.334H3.778v9.78h12.446Zm-10.668-8h4.445v4.444H5.556V9.112Z"
        id="date-start_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#date-start_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDateStarticon);
export default ForwardRef;
