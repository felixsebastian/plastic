import { SVGProps, Ref, forwardRef } from "react";

const SvgUserDeleteicon = (
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
        d="M7.694 10a3.332 3.332 0 1 1 0-6.665 3.332 3.332 0 1 1 0 6.665Zm8.332-2.011 1.767-1.767L18.97 7.4l-1.767 1.767 1.767 1.768-1.178 1.178-1.767-1.767-1.767 1.767-1.179-1.178 1.768-1.768L13.08 7.4l1.179-1.178 1.767 1.767Zm-8.332 3.677c2.225 0 6.665 1.117 6.665 3.333v1.666H1.03v-1.666c0-2.216 4.44-3.333 6.665-3.333Z"
        id="user-delete_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#user-delete_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUserDeleteicon);
export default ForwardRef;
