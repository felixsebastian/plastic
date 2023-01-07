import { SVGProps, Ref, forwardRef } from "react";

const SvgExperienceicon = (
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
        d="M11.645 4.653c-.62-.003-3.092 4.004-3.092 4.004 1.054 1.512 2.04 3.41 2.04 3.41l-1.235-.009C7.976 9.912 6.684 7.704 5.908 7.71 5.04 7.716 1 15.343 1 15.343h17.993s-6.086-10.685-7.348-10.69Z"
        id="experience_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#experience_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgExperienceicon);
export default ForwardRef;
