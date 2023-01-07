import { SVGProps, Ref, forwardRef } from "react";

const SvgSaveicon = (
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
        d="M14.444 2H3.778C2.79 2 2 2.8 2 3.778v12.444C2 17.2 2.791 18 3.778 18h12.444C17.2 18 18 17.2 18 16.222V5.556L14.444 2ZM10 16.222a2.663 2.663 0 0 1-2.667-2.666A2.663 2.663 0 0 1 10 10.889a2.663 2.663 0 0 1 2.667 2.667A2.663 2.663 0 0 1 10 16.222Zm2.667-8.889h-8.89V3.778h8.89v3.555Z"
        id="save_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#save_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgSaveicon);
export default ForwardRef;
