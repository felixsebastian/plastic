import { SVGProps, Ref, forwardRef } from "react";

const SvgPhotoUploadicon = (
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
    ref={ref}
    {...props}
  >
    <path
      d="M2.5 3.333v-2.5h1.667v2.5h2.5V5h-2.5v2.5H2.5V5H0V3.333h2.5Zm2.5 5v-2.5h2.5v-2.5h5.833L14.858 5H17.5c.917 0 1.667.75 1.667 1.667v10c0 .916-.75 1.666-1.667 1.666H4.167c-.917 0-1.667-.75-1.667-1.666V8.333H5Zm5.833 7.5c2.3 0 4.167-1.866 4.167-4.166 0-2.3-1.867-4.167-4.167-4.167a4.168 4.168 0 0 0-4.166 4.167c0 2.3 1.866 4.166 4.166 4.166Zm-2.666-4.166a2.664 2.664 0 0 0 2.666 2.666 2.664 2.664 0 0 0 2.667-2.666A2.664 2.664 0 0 0 10.833 9a2.664 2.664 0 0 0-2.666 2.667Z"
      fill={fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPhotoUploadicon);
export default ForwardRef;
