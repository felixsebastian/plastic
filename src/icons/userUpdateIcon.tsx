import { SVGProps, Ref, forwardRef } from "react";

const SvgUserUpdateicon = (
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
        d="m17.519 10.956 1.843-1.921H18.17c-.046-1.523-1.345-2.794-2.876-2.794a2.88 2.88 0 0 0-2.877 2.877c0 .686.247 1.351.7 1.878l.308.305a2.869 2.869 0 0 0 3.33.296l.092-.055-.752-.751-.052.022a1.853 1.853 0 0 1-2.6-1.695c0-1.02.83-1.85 1.85-1.85.993 0 1.807.785 1.85 1.767h-1.62l1.996 1.92Zm-10.019.71C5.275 11.666.834 12.784.834 15v1.666h13.333V15c0-2.217-4.442-3.334-6.667-3.334ZM7.5 10a3.333 3.333 0 1 0 .001-6.666 3.333 3.333 0 0 0 0 6.666Z"
        id="user-update_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#user-update_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgUserUpdateicon);
export default ForwardRef;
