import { SVGProps, Ref, forwardRef } from "react";

const SvgQuestionsicon = (
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
        d="M13 13H3v1.667h10V13Zm0-6.667H3V8h10V6.333Zm-10 5h15V9.667H3v1.666ZM3 18h15v-1.667H3V18ZM3 3v1.667h15V3H3Z"
        id="questions_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      fillRule="nonzero"
      xlinkHref="#questions_icon_svg__a"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgQuestionsicon);
export default ForwardRef;
