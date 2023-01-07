import { SVGProps, Ref, forwardRef } from "react";

const SvgInformationicon = (
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
        d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm-.8 5.6h1.6V6H9.2v1.6Zm0 6.4h1.6V9.2H9.2V14Z"
        id="information_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#information_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgInformationicon);
export default ForwardRef;
