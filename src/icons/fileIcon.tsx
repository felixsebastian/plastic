import { SVGProps, Ref, forwardRef } from "react";

const SvgFileicon = (
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
        d="m11.613 2 4.39 4.657V16.4a1.6 1.6 0 0 1-1.6 1.6H5.59a1.593 1.593 0 0 1-1.592-1.6l.008-12.8c0-.884.708-1.6 1.592-1.6h6.015Zm-.8 5.6h4.4l-4.4-4.4v4.4Zm-4 4h6.4V10h-6.4v1.6Zm0 3.2h6.4v-1.6h-6.4v1.6Z"
        id="file_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#file_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgFileicon);
export default ForwardRef;
