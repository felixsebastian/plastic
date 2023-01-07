import { SVGProps, Ref, forwardRef } from "react";

const SvgDeltaicon = (
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
        d="M2 10c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8-8-3.58-8-8Zm8-4.63-5.018 8.028h10.036L10 5.369Zm2.131 6.401H7.87L10 8.36l2.131 3.412Z"
        id="delta_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <circle cx={10} cy={10} r={7} />
      <use fill={fill} xlinkHref="#delta_icon_svg__a" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDeltaicon);
export default ForwardRef;
