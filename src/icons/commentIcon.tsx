import { SVGProps, Ref, forwardRef } from "react";

const SvgCommenticon = (
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
        d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18l.008-14.4c0-.884.708-1.6 1.592-1.6h12.8Zm-4 7.2H14V7.6h-1.6v1.6Zm-3.2 0h1.6V7.6H9.2v1.6ZM6 9.2h1.6V7.6H6v1.6Z"
        id="comment_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#comment_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgCommenticon);
export default ForwardRef;
