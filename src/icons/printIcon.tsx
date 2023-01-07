import { SVGProps, Ref, forwardRef } from "react";

const SvgPrinticon = (
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
        d="M5.2 6h9.6V2.8H5.2V6Zm10.4.8c1.328 0 2.4 1.072 2.4 2.4V14h-3.2v3.2H5.2V14H2V9.2c0-1.328 1.072-2.4 2.4-2.4h11.2Zm0 3.2c.44 0 .8-.36.8-.8 0-.44-.36-.8-.8-.8-.44 0-.8.36-.8.8 0 .44.36.8.8.8Zm-8.8 5.6h6.4v-4H6.8v4Z"
        id="print_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#print_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgPrinticon);
export default ForwardRef;
