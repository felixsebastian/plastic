import { SVGProps, Ref, forwardRef } from "react";

const SvgOpenWhiteicon = (
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
    <g fill="none" fillRule="evenodd">
      <path
        d="M15.361 2.636c.9 0 1.636.737 1.636 1.637v13.09c0 .9-.737 1.637-1.636 1.637H4.636c-.9 0-1.637-.736-1.637-1.636V4.273c0-.9.737-1.637 1.637-1.637h3.056A2.464 2.464 0 0 1 10 1c1.063 0 1.964.687 2.307 1.636h3.054Zm-4.543.819A.821.821 0 0 0 10 2.636a.82.82 0 0 0-.818.819c0 .45.368.818.818.818.45 0 .818-.368.818-.818Z"
        fill={fill}
      />
      <path
        fill="#FFF"
        d="M5.91 14.91h1.635V9.181H5.91zM9.182 14.91h1.636V6.726H9.182zM12.455 14.91h1.636v-3.274h-1.636z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgOpenWhiteicon);
export default ForwardRef;
