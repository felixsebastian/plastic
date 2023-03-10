import { SVGProps, Ref, forwardRef } from "react";

const SvgDraftWhiteicon = (
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
        d="M15.376 2.636c.9 0 1.637.737 1.637 1.637v13.09c0 .9-.737 1.637-1.637 1.637H4.631c-.9 0-1.636-.736-1.636-1.636V4.273c0-.9.736-1.637 1.636-1.637h3.062A2.463 2.463 0 0 1 10 1c1.064 0 1.964.687 2.307 1.636h3.07Zm-4.558.819a.82.82 0 0 1-.818.818.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819.82.82 0 0 1 .818.819Z"
        id="draft-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#draft-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m11.15 8.8-4.813 4.443v1.666h1.805l4.813-4.443zM13.255 7.487a.511.511 0 0 0-.682 0l-.942.87 1.806 1.665.941-.869a.421.421 0 0 0 0-.628l-1.123-1.038Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgDraftWhiteicon);
export default ForwardRef;
