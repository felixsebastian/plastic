import { SVGProps, Ref, forwardRef } from "react";

const SvgCommentDisabledicon = (
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
        d="M16.4 2c.884 0 1.6.715 1.6 1.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18V3.6C2 2.715 2.715 2 3.6 2h12.8Zm-3.544 8.12L11.16 8.422l1.696-1.696L11.728 5.6l-1.696 1.696L8.328 5.6 7.2 6.727l1.704 1.696-1.697 1.696 1.129 1.128 1.696-1.696 1.696 1.696 1.128-1.128Z"
        id="comment-disabled_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#comment-disabled_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCommentDisabledicon);
export default ForwardRef;
