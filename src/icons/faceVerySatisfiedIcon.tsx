import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceVerySatisfiedicon = (
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
        d="M9.992 2A7.991 7.991 0 0 0 2 10c0 4.424 3.576 8 7.992 8S18 14.424 18 10a8 8 0 0 0-8.008-8ZM10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4ZM8.4 8.8a1.2 1.2 0 1 0-2.4 0h2.4Zm5.6 0a1.2 1.2 0 1 0-2.4 0H14Zm-4 5.6a4.397 4.397 0 0 0 4.088-2.8H5.912A4.397 4.397 0 0 0 10 14.4Z"
        id="face-very-satisfied_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#face-very-satisfied_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceVerySatisfiedicon);
export default ForwardRef;
