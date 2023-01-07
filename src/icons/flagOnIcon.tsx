import { SVGProps, Ref, forwardRef } from "react";

const SvgFlagOnicon = (
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
        id="flag-on_icon_svg__a"
        d="M11.788 3.882 11.412 2h-8.47v16h1.882v-6.588h5.27l.377 1.882h6.588V3.882z"
      />
    </defs>
    <use fill={fill} xlinkHref="#flag-on_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlagOnicon);
export default ForwardRef;
