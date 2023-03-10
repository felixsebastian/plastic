import { SVGProps, Ref, forwardRef } from "react";

const SvgFavoriteOfficon = (
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
        d="M13.6 3A4.79 4.79 0 0 0 10 4.672 4.79 4.79 0 0 0 6.4 3 4.357 4.357 0 0 0 2 7.4c0 3.024 2.72 5.488 6.84 9.232L10 17.68l1.16-1.056C15.28 12.888 18 10.424 18 7.4 18 4.936 16.064 3 13.6 3Zm-3.52 12.44-.08.08-.08-.08C6.112 11.992 3.6 9.712 3.6 7.4c0-1.6 1.2-2.8 2.8-2.8 1.232 0 2.432.792 2.856 1.888h1.496C11.168 5.392 12.368 4.6 13.6 4.6c1.6 0 2.8 1.2 2.8 2.8 0 2.312-2.512 4.592-6.32 8.04Z"
        id="favorite-off_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#favorite-off_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgFavoriteOfficon);
export default ForwardRef;
