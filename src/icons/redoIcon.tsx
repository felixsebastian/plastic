import { SVGProps, Ref, forwardRef } from "react";

const SvgRedoicon = (
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
        d="M15.832 9.209A9.168 9.168 0 0 0 9.764 6.92C5.673 6.92 2.21 9.587 1 13.274l2.081.687a7.035 7.035 0 0 1 6.683-4.84 6.97 6.97 0 0 1 4.502 1.659l-3.182 3.18h7.92V6.04L15.832 9.21Z"
        id="redo_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#redo_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgRedoicon);
export default ForwardRef;
