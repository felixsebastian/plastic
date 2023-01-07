import { SVGProps, Ref, forwardRef } from "react";

const SvgArrowUpicon = (
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
        id="arrow-up_icon_svg__a"
        d="m4 10 1.058 1.057L9.25 6.872V16h1.5V6.872l4.185 4.193L16 10l-6-6z"
      />
    </defs>
    <use fill={fill} xlinkHref="#arrow-up_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgArrowUpicon);
export default ForwardRef;
