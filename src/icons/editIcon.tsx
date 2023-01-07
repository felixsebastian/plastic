import { SVGProps, Ref, forwardRef } from "react";

const SvgEditicon = (
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
        d="M1.556 14.666V18h3.519l10.383-9.837-3.519-3.334-10.383 9.837ZM18.17 5.594a.858.858 0 0 0 0-1.258L15.979 2.26a.978.978 0 0 0-1.328 0l-1.717 1.627 3.519 3.334 1.717-1.627Z"
        id="edit_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#edit_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgEditicon);
export default ForwardRef;
