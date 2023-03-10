import { SVGProps, Ref, forwardRef } from "react";

const SvgSendicon = (
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
        id="send_icon_svg__a"
        d="M2.008 3.143 2 8.475l11.425 1.523L2 11.52l.008 5.332 15.987-6.855z"
      />
    </defs>
    <use fill={fill} xlinkHref="#send_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgSendicon);
export default ForwardRef;
