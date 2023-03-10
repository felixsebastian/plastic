import { SVGProps, Ref, forwardRef } from "react";

const SvgPromotionicon = (
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
    ref={ref}
    {...props}
  >
    <path
      d="M9.992 2C14.415 2 18 5.584 18 10s-3.585 8-8.008 8C5.575 18 2 14.416 2 10s3.575-8 7.992-8Zm3.392 12.8-.896-3.856 2.984-2.584-3.936-.336L10 4.4 8.464 8.032l-3.936.336 2.983 2.584-.896 3.848L10 12.76l3.384 2.04Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPromotionicon);
export default ForwardRef;
