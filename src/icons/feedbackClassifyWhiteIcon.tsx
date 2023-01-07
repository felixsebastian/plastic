import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackClassifyWhiteicon = (
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
        d="M16.387 2H3.57C2.698 2 2 2.698 2 3.613V18l3.183-3.226h11.204c.872 0 1.613-.698 1.613-1.613V3.57C17.957 2.698 17.26 2 16.387 2Z"
        id="feedback-classify-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#feedback-classify-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m12.246 11.94-2.312-1.395-2.223 1.439.306-2.66-1.744-1.831 2.485-.349 1.22-2.571L11.2 7.144l2.486.349-1.745 1.831z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackClassifyWhiteicon);
export default ForwardRef;
