import { SVGProps, Ref, forwardRef } from "react";

const SvgCustomicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="m18.615 3.45-1.253-1.19a.967.967 0 0 0-1.32 0L7.66 10.223l2.573 2.444 8.382-7.963a.854.854 0 0 0 0-1.253M5.79 11.779c-1.553 0-2.807 1.19-2.807 2.666 0 1.164-1.085 1.777-1.87 1.777C1.971 17.307 3.44 18 4.852 18c2.068 0 3.743-1.59 3.743-3.555 0-1.475-1.254-2.666-2.807-2.666"
        id="custom_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#custom_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgCustomicon);
export default ForwardRef;
