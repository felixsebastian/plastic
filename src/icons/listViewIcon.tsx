import { SVGProps, Ref, forwardRef } from "react";

const SvgListViewicon = (
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
        d="M2 10.89h1.778V9.112H2v1.778Zm0 3.556h1.778v-1.778H2v1.778Zm0-7.112h1.778V5.556H2v1.778Zm3.556 3.556h12.446V9.112H5.556v1.778Zm0 3.556h12.446v-1.778H5.556v1.778Zm0-8.89v1.778h12.446V5.556H5.556Z"
        id="list-view_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#list-view_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgListViewicon);
export default ForwardRef;
