import { SVGProps, Ref, forwardRef } from "react";

const SvgRefreshicon = (
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
        d="M15.831 10a5.79 5.79 0 0 1-1.706 4.121A5.79 5.79 0 0 1 10 15.83a5.789 5.789 0 0 1-4.123-1.709A5.79 5.79 0 0 1 4.17 10c0-1.558.607-3.022 1.708-4.123A5.794 5.794 0 0 1 10 4.17c1.415 0 2.75.505 3.808 1.42l-2.001 2.002 6.04.778-.778-6.04-1.728 1.727A7.926 7.926 0 0 0 10.001 2a7.954 7.954 0 0 0-5.657 2.343A7.95 7.95 0 0 0 2.001 10a7.962 7.962 0 0 0 2.343 5.658l.001-.001A7.949 7.949 0 0 0 10.002 18a7.942 7.942 0 0 0 5.656-2.343A7.941 7.941 0 0 0 18 10.162L15.831 10Z"
        id="refresh_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#refresh_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgRefreshicon);
export default ForwardRef;
