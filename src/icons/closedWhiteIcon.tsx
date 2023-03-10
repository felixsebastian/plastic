import { SVGProps, Ref, forwardRef } from "react";

const SvgClosedWhiteicon = (
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
        d="M12.307 2.636A2.464 2.464 0 0 0 10 1a2.464 2.464 0 0 0-2.308 1.636H4.636c-.9 0-1.637.737-1.637 1.637v13.09c0 .9.737 1.637 1.637 1.637H15.36c.9 0 1.637-.736 1.637-1.636V4.273c0-.9-.738-1.637-1.637-1.637h-3.054Zm-1.489.819c0 .45-.369.818-.818.818a.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819c.45 0 .818.369.818.819Z"
        id="closed-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#closed-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m5.09 11.636 1.155-1.153 2.119 2.11 5.391-5.391 1.154 1.162-6.545 6.545z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgClosedWhiteicon);
export default ForwardRef;
