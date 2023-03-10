import { SVGProps, Ref, forwardRef } from "react";

const SvgNotificationicon = (
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
        d="M7.004 3.318 5.882 2.196a8.176 8.176 0 0 0-3.231 6.157H4.22a6.624 6.624 0 0 1 2.784-5.035Zm9.718 5.035h1.568a8.226 8.226 0 0 0-3.231-6.157l-1.114 1.122a6.663 6.663 0 0 1 2.777 5.035Zm-1.546.392c0-2.408-1.286-4.423-3.529-4.957v-.533c0-.651-.525-1.177-1.176-1.177-.651 0-1.177.526-1.177 1.177v.533c-2.25.534-3.53 2.541-3.53 4.957v3.922l-1.568 1.568v.785h12.55v-.785l-1.57-1.568V8.745Zm-4.705 8.628c.11 0 .211-.008.313-.032.51-.11.926-.455 1.13-.925.078-.189.117-.392.117-.612H8.894a1.58 1.58 0 0 0 1.577 1.569Z"
        id="notification_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#notification_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgNotificationicon);
export default ForwardRef;
