import { SVGProps, Ref, forwardRef } from "react";

const SvgSupporticon = (
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
        d="M10 14.5c-.92 0-1.776-.276-2.489-.75l-3.213 3.213A8.963 8.963 0 0 0 10 19a8.96 8.96 0 0 0 5.685-2.023l-3.215-3.215A4.482 4.482 0 0 1 10 14.5m6.963-10.201L13.75 7.51c.474.713.75 1.57.75 2.489 0 .913-.272 1.762-.738 2.471l3.215 3.215A8.967 8.967 0 0 0 19 10c0-2.164-.764-4.15-2.037-5.702M5.5 10c0-.913.272-1.762.738-2.471L3.023 4.314A8.965 8.965 0 0 0 1 10c0 2.164.764 4.15 2.037 5.701l3.213-3.213A4.484 4.484 0 0 1 5.5 10M10 5.5c.92 0 1.776.276 2.489.75l3.213-3.213A8.967 8.967 0 0 0 10 1a8.96 8.96 0 0 0-5.685 2.023l3.214 3.215A4.482 4.482 0 0 1 10 5.5"
        id="support_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#support_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgSupporticon);
export default ForwardRef;
