import { SVGProps, Ref, forwardRef } from "react";

const SvgBullettedListicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M1.5 6C.67 6 0 6.67 0 7.5S.67 9 1.5 9 3 8.33 3 7.5 2.33 6 1.5 6Zm0-6C.67 0 0 .67 0 1.5S.67 3 1.5 3 3 2.33 3 1.5 2.33 0 1.5 0Zm0 12c-.83 0-1.5.68-1.5 1.5S.68 15 1.5 15 3 14.32 3 13.5 2.33 12 1.5 12Zm3 2.5h14v-2h-14v2Zm0-6h14v-2h-14v2Zm0-8v2h14v-2h-14Z"
      fill={props.fill}
    />
  </svg>
);

const ForwardRef = forwardRef(SvgBullettedListicon);
export default ForwardRef;
