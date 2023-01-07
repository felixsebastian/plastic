import { SVGProps, Ref, forwardRef } from "react";

const SvgFlagOfficon = (
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
        d="M11.788 3.882h5.27v9.412h-6.587l-.377-1.882h-5.27V18H2.94V2h8.47l.377 1.882Zm-6.963-.004v5.668l7 .02.452 1.837h2.945l-.01-5.654h-4.86l-.515-1.871H4.825Z"
        id="flag-off_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#flag-off_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgFlagOfficon);
export default ForwardRef;
