import { SVGProps, Ref, forwardRef } from "react";

const SvgAcademyicon = (
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
        d="M10 2 0 7.455l10 5.454 8.182-4.464v6.281H20V7.455L10 2Zm0 12.726-6.364-3.471v3.636L10 18.364l6.364-3.473v-3.636L10 14.726Z"
        id="academy_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#academy_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgAcademyicon);
export default ForwardRef;
