import { SVGProps, Ref, forwardRef } from "react";

const SvgNavigatoricon = (
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
        d="M12.01 3.997v1.858h2.786V8.64h1.857V3.997H12.01Zm-8.663 0V8.64h1.857V5.855H7.99V3.997H3.347Zm11.449 7.363v2.787H12.01v1.856h4.643V11.36h-1.857Zm-11.449 0v4.643H7.99v-1.856H5.204V11.36H3.347Z"
        id="navigator_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#navigator_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgNavigatoricon);
export default ForwardRef;
