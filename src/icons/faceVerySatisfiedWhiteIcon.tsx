import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceVerySatisfiedWhiteicon = (
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
        id="face-very-satisfied-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#face-very-satisfied-white_icon_svg__a" />
      <path
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4Z"
        fill="#FFF"
      />
      <path
        d="M8.4 8.8a1.2 1.2 0 1 0-2.4 0h2.4ZM14 8.8a1.2 1.2 0 1 0-2.4 0H14ZM10 14.4a4.397 4.397 0 0 0 4.088-2.8H5.912A4.397 4.397 0 0 0 10 14.4Z"
        fill={fill}
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFaceVerySatisfiedWhiteicon);
export default ForwardRef;
