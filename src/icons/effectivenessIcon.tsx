import { SVGProps, Ref, forwardRef } from "react";

const SvgEffectivenessicon = (
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
        d="m10 10.847-6.45-.014.956 6.332c.154 1.045.856 1.82 1.913 1.82L10 19l3.58-.014c1.058 0 1.76-.776 1.914-1.821l.956-6.332-6.45.014Zm-.957-3.863V9.97h1.913V6.855c1.991-.616 3.43-2.288 3.43-4.276-1.885 0-3.513.929-4.39 2.292C8.99 2.605 6.52 1 3.627 1c0 2.94 2.322 5.394 5.416 5.984Z"
        id="effectiveness_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      xlinkHref="#effectiveness_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgEffectivenessicon);
export default ForwardRef;
