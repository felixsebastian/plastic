import { SVGProps, Ref, forwardRef } from "react";

const SvgReportSharingicon = (
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
        d="M8.223 6.89V3.335l-6.221 6.22 6.22 6.221v-3.643c4.444 0 7.554 1.422 9.776 4.532-.889-4.443-3.555-8.887-9.775-9.775Z"
        id="report-sharing_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      fillRule="nonzero"
      transform="matrix(-1 0 0 1 20 0)"
      xlinkHref="#report-sharing_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgReportSharingicon);
export default ForwardRef;
