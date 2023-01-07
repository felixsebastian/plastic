import { SVGProps, Ref, forwardRef } from "react";

const SvgMinimizeicon = (
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
      d="M19 2.269 14.239 7.03 17.2 10H10V2.8l2.961 2.961L17.731 1 19 2.269ZM2.269 19l4.761-4.761L10 17.2V10H2.8l2.961 2.961L1 17.731 2.269 19Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgMinimizeicon);
export default ForwardRef;
