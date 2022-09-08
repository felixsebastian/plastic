import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceDissatisfiedicon = (
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
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4M9.992 2C5.576 2 2 5.583 2 10c0 4.416 3.576 8 7.992 8C14.416 18 18 14.416 18 10c0-4.417-3.584-8-8.008-8M10 11.6a4.395 4.395 0 0 0-4.096 2.8H7.24A3.188 3.188 0 0 1 10 12.8c1.184 0 2.2.648 2.76 1.6h1.336A4.395 4.395 0 0 0 10 11.6m2.8-2.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4m-5.6 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
        id="face-dissatisfied_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#face-dissatisfied_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceDissatisfiedicon);
export default ForwardRef;
