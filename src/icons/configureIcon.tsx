import { SVGProps, Ref, forwardRef } from "react";

const SvgConfigureicon = (
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
        d="M17.537 4.683 14.37 7.85l-2.22-2.22 3.167-3.165c-1.747-.837-3.93-.546-5.385.909a4.71 4.71 0 0 0-1.055 5.021l-6.658 6.66c-.292.29-.292.763 0 1.018l1.71 1.71c.255.29.728.29 1.018 0l6.659-6.659a4.71 4.71 0 0 0 5.021-1.055c1.454-1.455 1.746-3.638.91-5.385"
        id="configure_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#configure_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgConfigureicon);
export default ForwardRef;
