import { SVGProps, Ref, forwardRef } from "react";

const SvgExclamationicon = (
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
        d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm.8 12v-1.6H9.2V14h1.6Zm0-3.2V6H9.2v4.8h1.6Z"
        id="exclamation_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#exclamation_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgExclamationicon);
export default ForwardRef;
