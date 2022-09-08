import { SVGProps, Ref, forwardRef } from "react";

const SvgVisibleicon = (
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
        d="M9.831 3.75c-4.09 0-7.583 2.544-8.998 6.135 1.415 3.591 4.908 6.135 8.998 6.135 4.09 0 7.583-2.544 8.998-6.135-1.415-3.591-4.908-6.135-8.998-6.135Zm0 10.225a4.091 4.091 0 0 1-4.09-4.09 4.091 4.091 0 0 1 4.09-4.09 4.091 4.091 0 0 1 4.09 4.09 4.091 4.091 0 0 1-4.09 4.09Zm0-6.544a2.45 2.45 0 0 0-2.454 2.454 2.45 2.45 0 0 0 2.454 2.454 2.45 2.45 0 0 0 2.454-2.454 2.45 2.45 0 0 0-2.454-2.454Z"
        id="visible_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#visible_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgVisibleicon);
export default ForwardRef;
