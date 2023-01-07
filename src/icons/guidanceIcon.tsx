import { SVGProps, Ref, forwardRef } from "react";

const SvgGuidanceicon = (
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
        d="M7.2 17.2c0 .44.36.8.8.8h3.2c.44 0 .8-.36.8-.8v-.8H7.2v.8ZM9.6 2A5.606 5.606 0 0 0 4 7.6c0 1.904.952 3.576 2.4 4.592V14c0 .44.36.8.8.8H12c.44 0 .8-.36.8-.8v-1.808A5.597 5.597 0 0 0 15.2 7.6c0-3.088-2.512-5.6-5.6-5.6Zm2.28 8.88-.68.48v1.84H8v-1.84l-.68-.48A3.997 3.997 0 0 1 5.6 7.6c0-2.208 1.792-4 4-4s4 1.792 4 4c0 1.304-.64 2.528-1.72 3.28Z"
        id="guidance_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#guidance_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgGuidanceicon);
export default ForwardRef;
