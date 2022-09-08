import { SVGProps, Ref, forwardRef } from "react";

const SvgReporticon = (
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
        d="M8 18h4V2H8v16Zm6 0h4V7h-4v11ZM2 18h4v-8H2v8Z"
        id="report_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#report_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgReporticon);
export default ForwardRef;
