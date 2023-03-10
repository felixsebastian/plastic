import { SVGProps, Ref, forwardRef } from "react";

const SvgBranchingicon = (
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
        d="M10.53 15.706H10v-2h.53v-1.177H10v-2h1v1.78c1.236-.403 2.195-.403 2.654-.403 1.743 0 5.24.916 5.24 2.66v2.105H10.53v-.965Zm5.496-8.088A2.375 2.375 0 0 1 13.654 10a2.383 2.383 0 0 1 0-4.765 2.375 2.375 0 0 1 2.372 2.383Zm-1.06 0c0-.734-.586-1.324-1.312-1.324a1.324 1.324 0 0 0 0 2.647c.726 0 1.313-.59 1.313-1.323Zm-3.378 5.613v2.38h6.248v-1.046c0-.642-2.342-1.6-4.182-1.6-.744 0-1.36.059-2.066.266ZM10 1h1v2h-1V1Zm0 3.176h1v2h-1v-2Zm0 3.177h1v2h-1v-2Zm0 9.53h1v2h-1v-2ZM3.87 7.617A2.375 2.375 0 0 1 6.24 5.235a2.383 2.383 0 0 1 0 4.765A2.375 2.375 0 0 1 3.87 7.618Zm5.496 9.053H1v-2.106c0-1.743 3.498-2.66 5.241-2.66.516 0 1.663 0 3.125.572v4.194Z"
        id="branching_icon_svg__a"
      />
    </defs>
    <use fill={fill} fillRule="nonzero" xlinkHref="#branching_icon_svg__a" />
  </svg>
);

const ForwardRef = forwardRef(SvgBranchingicon);
export default ForwardRef;
