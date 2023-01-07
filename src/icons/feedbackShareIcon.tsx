import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackShareicon = (
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
        d="M16.4 2A1.6 1.6 0 0 1 18 3.6v9.6a1.6 1.6 0 0 1-1.6 1.6H5.2L2 18l.008-14.4c0-.884.708-1.6 1.592-1.6h12.8Zm-5.511 8.92L14 8.014l-3.111-2.904v1.66C7.778 7.186 6.444 9.26 6 11.333c1.111-1.451 2.667-2.115 4.889-2.115v1.701Z"
        id="feedback-share_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#feedback-share_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackShareicon);
export default ForwardRef;
