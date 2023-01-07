import { SVGProps, Ref, forwardRef } from "react";

const SvgTagicon = (
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
        d="m13.315 3.978-10.419.01a1.892 1.892 0 0 0-1.894 1.884v8.256c0 1.042.853 1.885 1.894 1.885l10.419.01c.635 0 1.203-.313 1.544-.796l4.139-5.239-4.14-5.215a1.888 1.888 0 0 0-1.543-.795Z"
        id="tag_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#tag_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgTagicon);
export default ForwardRef;
