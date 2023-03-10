import { SVGProps, Ref, forwardRef } from "react";

const SvgEngagementicon = (
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
        d="M15.423 5.396c0-.634.372-1.165 1.01-1.165.637 0 1.152.511 1.152 1.144l-.547 10.815c0 .894-1.432 2.737-3.122 2.737L9.997 19c-.83 0-1.442-.275-2.717-1.401 0 0-4.158-4.196-4.77-5.121-.415-.627.618-1.882 1.542-1.33.022.006 2.531 2.01 2.733 2.198.315.294.436.302.436.072 0-.151-.782-9.365-.782-9.365 0-.634.514-1.145 1.152-1.145.637 0 1.152.511 1.152 1.145l.421 5.027h.296l.05-6.935c0-.633.515-1.145 1.153-1.145.637 0 1.152.512 1.152 1.145l.155 6.94.41.01.203-6.187c0-.633.515-1.145 1.152-1.145.637 0 1.152.512 1.152 1.145l-.05 6.172h.4l.186-3.684Zm-3.386 10.77.373-.337c1.328-1.205 2.204-1.999 2.204-2.973 0-.794-.624-1.418-1.417-1.418-.45 0-.88.209-1.16.539a1.544 1.544 0 0 0-1.16-.539c-.793 0-1.417.624-1.417 1.418 0 .974.877 1.768 2.203 2.971l.374.34Z"
        id="engagement_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#engagement_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgEngagementicon);
export default ForwardRef;
