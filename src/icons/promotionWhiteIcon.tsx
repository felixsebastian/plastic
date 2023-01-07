import { SVGProps, Ref, forwardRef } from "react";

const SvgPromotionWhiteicon = (
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
        d="M9.992 2C5.575 2 2 5.584 2 10s3.575 8 7.992 8C14.415 18 18 14.416 18 10s-3.585-8-8.008-8Z"
        id="promotion-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#promotion-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M13.384 14.8 10 12.76 6.615 14.8l.896-3.848-2.983-2.584 3.936-.336L10 4.4l1.536 3.624 3.936.336-2.984 2.584z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgPromotionWhiteicon);
export default ForwardRef;
