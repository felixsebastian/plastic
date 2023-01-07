import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceNeutralWhiteicon = (
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
        d="M12.8 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
        id="face-neutral-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M9.992 2C5.576 2 2 5.584 2 10s3.576 8 7.992 8C14.416 18 18 14.416 18 10s-3.584-8-8.008-8Z"
        fill={fill}
      />
      <path
        d="M10 16.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4Z"
        fill="#FFF"
      />
      <path d="M8.4 8A1.2 1.2 0 1 0 6 8a1.2 1.2 0 0 0 2.4 0Z" fill={fill} />
      <use fill={fill} xlinkHref="#face-neutral-white_icon_svg__a" />
      <path fill={fill} d="M7.6 12.8h4.8v-1.2H7.6z" />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgFaceNeutralWhiteicon);
export default ForwardRef;
