import { SVGProps, Ref, forwardRef } from "react";

const SvgActionOffWhiteicon = (
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
        id="action-off-white_icon_svg__a"
        d="m7.947 1-4.248 9.469 5.271-.144L8.53 19l7.771-13.196H11.72l2.004-4.783z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#action-off-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m8.857 2.385 2.776.01-1.207 2.882-.8 1.909h4.243l-3.652 6.2.151-2.992.076-1.49-1.512.04-3.055.084z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgActionOffWhiteicon);
export default ForwardRef;
