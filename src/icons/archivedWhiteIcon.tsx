import { SVGProps, Ref, forwardRef } from "react";

const SvgArchivedWhiteicon = (
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
        d="M12.307 2.636A2.463 2.463 0 0 0 10 1a2.463 2.463 0 0 0-2.307 1.636h-3.06c-.9 0-1.636.737-1.636 1.637v13.09c0 .9.736 1.637 1.636 1.637h10.73c.9 0 1.636-.736 1.636-1.636V4.273c0-.9-.736-1.637-1.636-1.637h-3.056Zm-1.489.819a.82.82 0 0 1-.818.818.82.82 0 0 1-.818-.818.82.82 0 0 1 .818-.819.82.82 0 0 1 .818.819Z"
        id="archived-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#archived-white_icon_svg__a" />
      <path
        fill="#FFF"
        d="m10 14.91-4.09-4.092h2.454V7.545h3.272v3.273h2.455z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgArchivedWhiteicon);
export default ForwardRef;
