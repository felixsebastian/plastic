import { SVGProps, Ref, forwardRef } from "react";

const SvgArchivedicon = (
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
        d="M12.307 2.636A2.463 2.463 0 0 0 10 1a2.463 2.463 0 0 0-2.307 1.636h-3.06c-.9 0-1.636.737-1.636 1.637v13.09c0 .9.736 1.637 1.636 1.637h10.73c.9 0 1.636-.736 1.636-1.636V4.273c0-.9-.736-1.637-1.636-1.637h-3.056Zm-1.489.819a.82.82 0 0 1-.818.818.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819.82.82 0 0 1 .818.819ZM10 14.909l-4.09-4.09h2.454V7.544h3.272v3.273h2.455L10 14.91Z"
        id="archived_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#archived_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgArchivedicon);
export default ForwardRef;
