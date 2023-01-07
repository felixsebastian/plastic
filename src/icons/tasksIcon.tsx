import { SVGProps, Ref, forwardRef } from "react";

const SvgTasksicon = (
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
        d="M15.444 3H4.548c-.864 0-1.54.692-1.54 1.556L3 15.444C3 16.3 3.684 17 4.548 17h10.896C16.3 17 17 16.3 17 15.444V4.556C17 3.692 16.3 3 15.444 3Zm0 9.333h-3.11A2.335 2.335 0 0 1 10 14.667a2.335 2.335 0 0 1-2.333-2.334h-3.12V4.556h10.897v7.777Z"
        id="tasks_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#tasks_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgTasksicon);
export default ForwardRef;
