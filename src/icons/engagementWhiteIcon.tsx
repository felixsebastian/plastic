import { SVGProps, Ref, forwardRef } from "react";

const SvgEngagementWhiteicon = (
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
        d="m15.423 5.396-.187 3.684h-.4l.051-6.172c0-.633-.515-1.145-1.152-1.145-.637 0-1.152.512-1.152 1.145l-.204 6.187-.41-.01-.154-6.94C11.815 1.512 11.3 1 10.663 1c-.638 0-1.152.512-1.152 1.145L9.46 9.08h-.296l-.421-5.027c0-.634-.515-1.145-1.152-1.145-.638 0-1.152.511-1.152 1.145 0 0 .782 9.214.782 9.365 0 .23-.12.222-.436-.072-.202-.189-2.71-2.192-2.733-2.198-.924-.552-1.957.703-1.543 1.33.613.925 4.771 5.121 4.771 5.121C8.555 18.725 9.168 19 9.997 19l3.919-.073c1.69 0 3.122-1.843 3.122-2.737l.547-10.815c0-.633-.515-1.144-1.152-1.144-.638 0-1.01.531-1.01 1.165Z"
        id="engagement-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#engagement-white_icon_svg__a" />
      <path
        d="m12.037 16.167-.374-.34c-1.326-1.203-2.203-1.997-2.203-2.971 0-.794.624-1.418 1.417-1.418.449 0 .879.209 1.16.539.28-.33.71-.539 1.16-.539.793 0 1.417.624 1.417 1.418 0 .974-.876 1.768-2.204 2.973l-.373.338Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgEngagementWhiteicon);
export default ForwardRef;
