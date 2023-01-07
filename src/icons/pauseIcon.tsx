import { SVGProps, Ref, forwardRef } from "react";

const SvgPauseicon = (
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
        d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8Zm-.8 11.2H7.6V6.8h1.6v6.4Zm3.2 0h-1.6V6.8h1.6v6.4Z"
        id="pause_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#pause_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgPauseicon);
export default ForwardRef;
