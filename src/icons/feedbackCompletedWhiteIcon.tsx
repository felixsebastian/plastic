import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackCompletedWhiteicon = (
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
        d="M10 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Z"
        id="feedback-completed-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use
        fill={fill}
        fillRule="nonzero"
        xlinkHref="#feedback-completed-white_icon_svg__a"
      />
      <path
        fill="#FFF"
        d="M14 14.8H6v-1.6h8zM8.64 11.6 6 8.96l1.12-1.12 1.52 1.52 4.24-4.24L14 6.24z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackCompletedWhiteicon);
export default ForwardRef;
