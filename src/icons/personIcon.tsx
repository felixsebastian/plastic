import { SVGProps, Ref, forwardRef } from "react";

const SvgPersonicon = (
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
        d="M10.005 6c-1.069 0-3.2.536-3.2 1.6l-.01 4.878h1.61V18h3.2v-5.522h1.59l.01-4.878c0-1.064-2.133-1.6-3.2-1.6m0-.8a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2"
        id="person_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#person_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgPersonicon);
export default ForwardRef;
