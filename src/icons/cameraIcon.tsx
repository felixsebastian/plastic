import { SVGProps, Ref, forwardRef } from "react";

const SvgCameraicon = (
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
        d="M2.25 2.25V0h1.5v2.25H6v1.5H3.75V6h-1.5V3.75H0v-1.5h2.25Zm2.25 4.5V4.5h2.25V2.25H12l1.373 1.5h2.377c.825 0 1.5.675 1.5 1.5v9c0 .825-.675 1.5-1.5 1.5h-12c-.825 0-1.5-.675-1.5-1.5v-7.5H4.5Zm5.25 6.75c2.07 0 3.75-1.68 3.75-3.75C13.5 7.68 11.82 6 9.75 6 7.68 6 6 7.68 6 9.75c0 2.07 1.68 3.75 3.75 3.75Zm-2.4-3.75c0 1.328 1.072 2.4 2.4 2.4 1.328 0 2.4-1.072 2.4-2.4 0-1.328-1.072-2.4-2.4-2.4a2.397 2.397 0 0 0-2.4 2.4Z"
        id="camera_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      fillRule="nonzero"
      xlinkHref="#camera_icon_svg__a"
      transform="translate(1 2)"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCameraicon);
export default ForwardRef;
