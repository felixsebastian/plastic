import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceSatisfiedicon = (
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
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4M9.992 2C5.576 2 2 5.584 2 10s3.576 8 7.992 8C14.416 18 18 14.416 18 10s-3.584-8-8.008-8M10 13.2c-1.184 0-2.2-.648-2.76-1.6H5.904a4.396 4.396 0 0 0 8.192 0H12.76c-.56.952-1.576 1.6-2.76 1.6m2.8-4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4m-5.6 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4"
        id="face-satisfied_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#face-satisfied_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceSatisfiedicon);
export default ForwardRef;
