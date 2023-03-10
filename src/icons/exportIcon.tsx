import { SVGProps, Ref, forwardRef } from "react";

const SvgExporticon = (
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
        d="M15.827 8.446a5.94 5.94 0 0 0-5.824-4.78 5.944 5.944 0 0 0-5.266 3.196A4.754 4.754 0 0 0 .5 11.585a4.75 4.75 0 0 0 4.751 4.752h10.295a3.96 3.96 0 0 0 3.959-3.96c0-2.09-1.627-3.785-3.678-3.931Zm-1.865 2.348-3.96 3.959-3.959-3.96H8.42V7.627h3.167v3.168h2.376Z"
        id="export_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#export_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgExporticon);
export default ForwardRef;
