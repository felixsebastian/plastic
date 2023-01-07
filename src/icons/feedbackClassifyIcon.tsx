import { SVGProps, Ref, forwardRef } from "react";

const SvgFeedbackClassifyicon = (
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
        d="M16.387 2c.872 0 1.57.698 1.613 1.57v9.59c0 .916-.74 1.614-1.613 1.614H5.183L2 18V3.613C2 2.698 2.698 2 3.57 2h12.817Zm-4.141 9.94-.306-2.616 1.745-1.831-2.486-.349-1.22-2.571-1.22 2.571-2.486.349 1.744 1.831-.306 2.66 2.223-1.44 2.312 1.396Z"
        id="feedback-classify_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#feedback-classify_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgFeedbackClassifyicon);
export default ForwardRef;
