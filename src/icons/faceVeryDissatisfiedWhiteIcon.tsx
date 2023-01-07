import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceVeryDissatisfiedWhiteicon = (
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
        d="M9.992 2A7.991 7.991 0 0 0 2 10c0 4.424 3.576 8 7.992 8S18 14.424 18 10a8 8 0 0 0-8.008-8Z"
        id="face-very-dissatisfied-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#face-very-dissatisfied-white_icon_svg__a" />
      <path
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4Z"
        fill="#FFF"
      />
      <path
        fill={fill}
        d="m13.344 6.608-.848.848-.848-.848-.848.848.848.848-.848.848.848.848.848-.848.848.848.848-.848-.848-.848.848-.848zM6.656 10l.848-.848.848.848.848-.848-.848-.848.848-.848-.848-.848-.848.848-.848-.848-.848.848.848.848-.848.848zM10 11.6a4.397 4.397 0 0 0-4.088 2.8h8.176A4.397 4.397 0 0 0 10 11.6Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFaceVeryDissatisfiedWhiteicon);
export default ForwardRef;
