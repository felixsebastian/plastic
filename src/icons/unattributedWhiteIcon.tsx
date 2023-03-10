import { SVGProps, Ref, forwardRef } from "react";

const SvgUnattributedWhiteicon = (
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
        d="M17.497 3.145H2.503c-.825 0-1.5.686-1.5 1.523v10.664c0 .838.675 1.523 1.5 1.523h14.994c.825 0 1.492-.685 1.492-1.523l.008-10.664c0-.837-.675-1.523-1.5-1.523Z"
        id="unattributed-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={fill} xlinkHref="#unattributed-white_icon_svg__a" />
      <path
        d="M7.001 5.43c1.245 0 2.25 1.02 2.25 2.286C9.25 8.98 8.246 10 7 10s-2.25-1.02-2.25-2.284c0-1.265 1.005-2.286 2.25-2.286ZM11.5 14.57H2.503v-.761c0-1.524 2.998-2.361 4.498-2.361s4.499.837 4.499 2.36v.763ZM14.035 12.463h1.125v-1.071h-1.125zM16.324 8.312l-.505.493c-.405.39-.66.713-.66 1.516h-1.124v-.268c0-.59.254-1.125.659-1.516l.696-.675c.209-.193.332-.46.332-.756 0-.588-.505-1.07-1.124-1.07-.619 0-1.125.482-1.125 1.07h-1.125c0-1.183 1.007-2.142 2.25-2.142 1.242 0 2.249.96 2.249 2.142 0 .472-.203.9-.523 1.206Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgUnattributedWhiteicon);
export default ForwardRef;
