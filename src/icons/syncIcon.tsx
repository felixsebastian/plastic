import { SVGProps, Ref, forwardRef } from "react";

const SvgSyncicon = (
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
        d="m3.638 6.365 3.637 3.638H4.547a5.461 5.461 0 0 0 5.456 5.456c.919 0 1.792-.228 2.546-.637l1.328 1.327a7.216 7.216 0 0 1-3.874 1.128 7.273 7.273 0 0 1-7.275-7.274H0l3.638-3.638Zm11.82 3.638a5.46 5.46 0 0 0-5.455-5.457c-.919 0-1.791.227-2.547.637L6.13 3.855a7.214 7.214 0 0 1 3.874-1.128 7.273 7.273 0 0 1 7.275 7.276h2.728l-3.638 3.637-3.637-3.637h2.728Z"
        id="sync_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#sync_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgSyncicon);
export default ForwardRef;
