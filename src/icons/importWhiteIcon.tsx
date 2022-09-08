import { SVGProps, Ref, forwardRef } from "react";

const SvgImportWhiteicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M15.823 8.444A5.938 5.938 0 0 0 10 3.667 5.943 5.943 0 0 0 4.735 6.86 4.752 4.752 0 0 0 .5 11.583a4.749 4.749 0 0 0 4.75 4.75h10.292a3.96 3.96 0 0 0 3.958-3.958c0-2.09-1.627-3.784-3.677-3.93Z"
        id="import-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#import-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="M11.583 13.958H8.417v-3.166H6.042L10 6.833l3.958 3.959h-2.375z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgImportWhiteicon);
export default ForwardRef;
