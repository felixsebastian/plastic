import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackCompletedicon = (
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
        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm4 12.8H6v-1.6h8v1.6Zm-5.36-3.2L6 8.96l1.12-1.12 1.52 1.52 4.24-4.24L14 6.24 8.64 11.6Z"
        id="feedback-completed_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      fillRule="nonzero"
      xlinkHref="#feedback-completed_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackCompletedicon);
export default ForwardRef;
