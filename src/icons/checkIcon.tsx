import { SVGProps, Ref, forwardRef } from "react";

const SvgCheckicon = (
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
        id="check_icon_svg__a"
        d="m8.333 14.342-4.166-4.167L5.342 9l2.991 2.983 6.325-6.325 1.175 1.184z"
      />
    </defs>
    <use fill={fill} xlinkHref="#check_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgCheckicon);
export default ForwardRef;
