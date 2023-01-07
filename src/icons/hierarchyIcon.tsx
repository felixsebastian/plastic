import { SVGProps, Ref, forwardRef } from "react";

const SvgHierarchyicon = (
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
        d="M8.202 6.434h3.601V4.567h-3.6v1.867Zm.9.834v1.8H1.9v3.601h1.8v-1.8h5.402v1.8h1.801v-1.8h5.402v1.8h1.8v-3.6h-7.202V7.267h-1.8Zm6.302 8.169h3.601v-1.868h-3.6v1.868Zm-7.202 0h3.601v-1.868h-3.6v1.868Zm-7.202 0h3.601v-1.868H1v1.868Z"
        id="hierarchy_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#hierarchy_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgHierarchyicon);
export default ForwardRef;
