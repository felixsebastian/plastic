import { SVGProps, Ref, forwardRef } from "react";

const SvgFavoriteOnicon = (
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
        d="M13.6 3A4.79 4.79 0 0 0 10 4.672 4.79 4.79 0 0 0 6.4 3 4.357 4.357 0 0 0 2 7.4c0 3.024 2.72 5.488 6.84 9.232L10 17.68l1.16-1.056C15.28 12.888 18 10.424 18 7.4 18 4.936 16.064 3 13.6 3Z"
        id="favorite-on_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      fillRule="nonzero"
      xlinkHref="#favorite-on_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFavoriteOnicon);
export default ForwardRef;
