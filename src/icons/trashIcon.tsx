import { SVGProps, Ref, forwardRef } from "react";

const SvgTrashicon = (
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
        d="M13 2.889 12.143 2H7.857L7 2.889H4v1.778h12V2.889h-3ZM5.005 16.222c0 .982.767 1.778 1.714 1.778h6.562c.947 0 1.714-.796 1.714-1.778V5.556h-9.99v10.666Z"
        id="trash_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#trash_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgTrashicon);
export default ForwardRef;
