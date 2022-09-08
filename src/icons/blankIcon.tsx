import { SVGProps, Ref, forwardRef } from "react";

const SvgBlankicon = (
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
        d="M12.303 2.636A2.446 2.446 0 0 0 10 1a2.446 2.446 0 0 0-2.303 1.636H4.635c-.904 0-1.637.733-1.637 1.637v13.09c0 .905.733 1.637 1.637 1.637H15.36c.904 0 1.636-.732 1.636-1.636V4.273c0-.904-.732-1.637-1.636-1.637h-3.057Zm-1.485.819a.818.818 0 1 1-1.636 0 .818.818 0 0 1 1.636 0Z"
        id="blank_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#blank_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgBlankicon);
export default ForwardRef;
