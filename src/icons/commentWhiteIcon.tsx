import { SVGProps, Ref, forwardRef } from "react";

const SvgCommentWhiteicon = (
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
        d="M16.4 2H3.6c-.884 0-1.592.716-1.592 1.6L2 18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 16.4 2Z"
        id="comment-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#comment-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M12.4 9.2H14V7.6h-1.6zM9.2 9.2h1.6V7.6H9.2zM6 9.2h1.6V7.6H6z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgCommentWhiteicon);
export default ForwardRef;
