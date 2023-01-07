import { SVGProps, Ref, forwardRef } from "react";

const SvgFaceNeutralicon = (
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
        d="M12.8 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM8.4 8A1.2 1.2 0 1 0 6 8a1.2 1.2 0 0 0 2.4 0Zm1.6 8.4A6.398 6.398 0 0 1 3.6 10c0-3.536 2.864-6.4 6.4-6.4 3.536 0 6.4 2.864 6.4 6.4 0 3.536-2.864 6.4-6.4 6.4ZM9.992 2C5.576 2 2 5.584 2 10s3.576 8 7.992 8C14.416 18 18 14.416 18 10s-3.584-8-8.008-8ZM7.6 12.8h4.8v-1.2H7.6v1.2Z"
        id="face-neutral_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#face-neutral_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgFaceNeutralicon);
export default ForwardRef;
