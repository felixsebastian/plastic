import { SVGProps, Ref, forwardRef } from "react";

const SvgEmailicon = (
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
        d="M16.4 3.5H3.6c-.88 0-1.592.72-1.592 1.6L2 14.7c0 .88.72 1.6 1.6 1.6h12.8c.88 0 1.6-.72 1.6-1.6V5.1c0-.88-.72-1.6-1.6-1.6Zm0 3.2-6.4 4-6.4-4V5.1l6.4 4 6.4-4v1.6Z"
        id="email_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#email_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgEmailicon);
export default ForwardRef;
