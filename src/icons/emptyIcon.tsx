import { SVGProps, Ref, forwardRef } from "react";

const SvgEmptyicon = (
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
        d="M2 10c0-4.416 3.584-8 8-8s8 3.584 8 8-3.584 8-8 8-8-3.584-8-8Zm8 6.4c3.536 0 6.4-2.864 6.4-6.4 0-3.536-2.864-6.4-6.4-6.4A6.398 6.398 0 0 0 3.6 10c0 3.536 2.864 6.4 6.4 6.4Z"
        id="empty_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#empty_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgEmptyicon);
export default ForwardRef;
