import { SVGProps, Ref, forwardRef } from "react";

const SvgCommunicationsicon = (
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
        d="M17.2 5.2h-1.6v7.2H5.2V14c0 .44.36.8.8.8h8.8L18 18V6c0-.44-.36-.8-.8-.8ZM14 10V2.8c0-.44-.36-.8-.8-.8H2.8c-.44 0-.8.36-.8.8V14l3.2-3.2h8c.44 0 .8-.36.8-.8Z"
        id="communications_icon_svg__a"
      />
    </defs>
    <use
      fill={fill}
      fillRule="nonzero"
      xlinkHref="#communications_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgCommunicationsicon);
export default ForwardRef;
