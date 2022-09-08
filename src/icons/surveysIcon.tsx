import { SVGProps, Ref, forwardRef } from "react";

const SvgSurveysicon = (
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
        d="M12.193 2.454h3.251c.856 0 1.556.655 1.556 1.455v13.636c0 .8-.7 1.455-1.556 1.455H4.556C3.7 19 3 18.345 3 17.545V3.91c0-.8.7-1.455 1.556-1.455h3.25C8.134 1.611 8.99 1 10 1c1.01 0 1.867.61 2.193 1.454Zm-5.83 6.091h7.273V7.091H6.363v1.454Zm0 2.909h7.273V9.999H6.363v1.455Zm0 2.908h5.091v-1.454h-5.09v1.454ZM10 2.454a.73.73 0 0 0-.727.728c0 .4.327.727.727.727a.73.73 0 0 0 .726-.727.73.73 0 0 0-.726-.728Z"
        id="surveys_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#surveys_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSurveysicon);
export default ForwardRef;
