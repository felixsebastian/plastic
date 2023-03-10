import { SVGProps, Ref, forwardRef } from "react";

const SvgImporticon = (
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
        d="M15.823 8.444A5.938 5.938 0 0 0 10 3.667 5.943 5.943 0 0 0 4.735 6.86 4.752 4.752 0 0 0 .5 11.583a4.749 4.749 0 0 0 4.75 4.75h10.292a3.96 3.96 0 0 0 3.958-3.958c0-2.09-1.627-3.784-3.677-3.93Zm-4.24 5.514H8.417v-3.166H6.042L10 6.833l3.958 3.959h-2.375v3.166Z"
        id="import_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#import_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgImporticon);
export default ForwardRef;
