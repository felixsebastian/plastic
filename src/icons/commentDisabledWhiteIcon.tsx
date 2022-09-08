import { SVGProps, Ref, forwardRef } from "react";

const SvgCommentDisabledWhiteicon = (
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
        d="M16.4 2H3.6C2.715 2 2 2.715 2 3.6V18l3.2-3.2h11.2a1.6 1.6 0 0 0 1.6-1.6V3.6c0-.885-.716-1.6-1.6-1.6Z"
        id="comment-disabled-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#comment-disabled-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m12.856 10.12-1.128 1.127-1.696-1.696-1.696 1.696-1.129-1.128 1.697-1.696L7.2 6.727 8.328 5.6l1.704 1.696L11.728 5.6l1.128 1.127-1.696 1.696z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgCommentDisabledWhiteicon);
export default ForwardRef;
