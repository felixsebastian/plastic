import { SVGProps, Ref, forwardRef } from "react";

const SvgSurveysWhiteicon = (
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
        d="M12.193 2.454C11.867 1.611 11.011 1 10 1c-1.01 0-1.867.61-2.193 1.454H4.556C3.7 2.454 3 3.109 3 3.909v13.636c0 .8.7 1.455 1.556 1.455h10.888C16.3 19 17 18.345 17 17.545V3.91c0-.8-.7-1.455-1.556-1.455h-3.25Zm-2.193 0c.4 0 .726.327.726.728a.73.73 0 0 1-.726.727.73.73 0 0 1-.727-.727c0-.4.327-.728.727-.728Z"
        id="surveys-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#surveys-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M6.363 8.545h7.273V7.091H6.363zM6.363 11.454h7.273V9.999H6.363zM6.363 14.362h5.091v-1.454h-5.09z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgSurveysWhiteicon);
export default ForwardRef;
