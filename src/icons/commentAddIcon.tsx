import { SVGProps, Ref, forwardRef } from "react";

const SvgCommentAddicon = (
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
        d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18V3.6C2 2.716 2.715 2 3.6 2h12.8Zm-3.174 7.218V7.623h-2.398V5.225H9.233v2.398l-2.404.006v1.595l2.404-.006v2.399h1.595V9.218h2.398Z"
        id="comment-add_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#comment-add_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgCommentAddicon);
export default ForwardRef;
