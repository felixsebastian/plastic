import { SVGProps, Ref, forwardRef } from "react";

const SvgUndoicon = (
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
        d="M10.24 6.921A9.166 9.166 0 0 0 4.172 9.21L1 6.041v7.92h7.92L5.739 10.78A6.967 6.967 0 0 1 10.24 9.12c3.12 0 5.76 2.028 6.684 4.84l2.08-.686c-1.21-3.688-4.672-6.354-8.764-6.354"
        id="undo_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#undo_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgUndoicon);
export default ForwardRef;
