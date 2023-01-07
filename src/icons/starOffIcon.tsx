import { SVGProps, Ref, forwardRef } from "react";

const SvgStarOfficon = (
  {
    fill,
    size,
    ...props
  }: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="m18.667 8.033-5.992-.516L10.333 2 7.992 7.525 2 8.033l4.55 3.942-1.367 5.858 5.15-3.108 5.15 3.108-1.358-5.858 4.542-3.942Zm-8.334 5.134L7.2 15.058l.833-3.566-2.766-2.4 3.65-.317 1.416-3.358 1.425 3.366 3.65.317-2.766 2.4.833 3.567-3.142-1.9Z"
        id="star-off_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      fillRule="nonzero"
      xlinkHref="#star-off_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgStarOfficon);
export default ForwardRef;
