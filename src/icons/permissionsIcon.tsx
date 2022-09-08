import { SVGProps, Ref, forwardRef } from "react";

const SvgPermissionsicon = (
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
        d="M5.91 11.638c-.9 0-1.637-.737-1.637-1.637S5.01 8.364 5.91 8.364s1.637.737 1.637 1.637-.737 1.637-1.637 1.637Zm4.624-3.274A4.903 4.903 0 0 0 5.91 5.091 4.913 4.913 0 0 0 1 10c0 2.709 2.2 4.91 4.91 4.91a4.903 4.903 0 0 0 4.624-3.273h3.56v3.273h3.273v-3.273h1.636V8.364h-8.47Z"
        id="permissions_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#permissions_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgPermissionsicon);
export default ForwardRef;
