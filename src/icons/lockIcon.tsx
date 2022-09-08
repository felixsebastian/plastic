import { SVGProps, Ref, forwardRef } from "react";

const SvgLockicon = (
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
        d="M14.667 7.333h-.762V5.81A3.81 3.81 0 0 0 10.095 2a3.81 3.81 0 0 0-3.81 3.81v1.523h-.761C4.686 7.333 4 8.02 4 8.857v7.62C4 17.313 4.686 18 5.524 18h9.143c.838 0 1.523-.686 1.523-1.524V8.857c0-.838-.685-1.524-1.523-1.524Zm-4.572 6.857a1.528 1.528 0 0 1-1.524-1.523c0-.838.686-1.524 1.524-1.524s1.524.686 1.524 1.524-.686 1.523-1.524 1.523Zm2.362-6.857H7.733V5.81a2.364 2.364 0 0 1 2.362-2.362 2.364 2.364 0 0 1 2.362 2.362v1.523Z"
        id="lock_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} fillRule="nonzero" xlinkHref="#lock_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgLockicon);
export default ForwardRef;
