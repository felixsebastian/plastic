import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaBareicon = (
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
        d="m10.482 3.37 8 12.8h-16l8-12.8Zm4.7 10.829-4.7-7.523-4.699 7.523h9.398Z"
        id="delta-bare_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#delta-bare_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaBareicon);
export default ForwardRef;
