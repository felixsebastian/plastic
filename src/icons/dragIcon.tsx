import { SVGProps, Ref, forwardRef } from "react";

const SvgDragicon = (
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
        d="M2 12c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM2 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm6 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM8 0c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Zm0 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2Z"
        id="drag_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#drag_icon_svg__a"
      transform="translate(5 2)"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDragicon);
export default ForwardRef;
