import { SVGProps, Ref, forwardRef } from "react";

const SvgSecurityTipicon = (
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
      d="M10.182 0 2 3.636v5.455C2 14.136 5.49 18.855 10.182 20c4.69-1.145 8.182-5.864 8.182-10.91V3.637L10.182 0Zm-.91 5.455h1.819v1.818H9.273V5.455Zm0 3.636h1.819v5.455H9.273V9.09Z"
      fill="currentColor"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSecurityTipicon);
export default ForwardRef;
