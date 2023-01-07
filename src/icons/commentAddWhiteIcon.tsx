import { SVGProps, Ref, forwardRef } from "react";

const SvgCommentAddWhiteicon = (
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
        d="M16.4 2H3.6C2.715 2 2 2.716 2 3.6V18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6A1.6 1.6 0 0 0 16.4 2Z"
        id="comment-add-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#comment-add-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M13.226 9.218h-2.398v2.399H9.233V9.218l-2.404.006V7.629l2.404-.006V5.225h1.595v2.398h2.398z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgCommentAddWhiteicon);
export default ForwardRef;
