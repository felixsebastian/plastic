import { SVGProps, Ref, forwardRef } from "react";

const SvgDepartmenticon = (
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
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10 8.4c1.902 0 3.203.372 3.547.525A3.482 3.482 0 0 1 15.6 12.11V14H4.4v-1.878c0-1.377.793-2.637 2.053-3.185.25-.11 1.645-.537 3.547-.537Zm6.533-.233a2.34 2.34 0 0 0 2.334-2.334A2.34 2.34 0 0 0 16.533 3.5 2.34 2.34 0 0 0 14.2 5.833a2.34 2.34 0 0 0 2.333 2.334Zm3.267 4.001c0-.945-.7-1.668-1.423-2.158-.885-.56-1.43-.612-1.844-.677-.45-.07-.886.047-1.318.117.467.793.849 1.692.849 2.66v1.878L19.8 14v-1.832ZM10 0c1.937 0 3.5 1.563 3.5 3.5S11.937 7 10 7a3.495 3.495 0 0 1-3.5-3.5C6.5 1.563 8.063 0 10 0ZM1.133 5.833a2.34 2.34 0 0 0 2.334 2.334A2.34 2.34 0 0 0 5.8 5.833 2.34 2.34 0 0 0 3.467 3.5a2.34 2.34 0 0 0-2.334 2.333Z"
      fill="#35374A"
    />
    <path
      d="M1.623 10.01C.9 10.5.2 11.223.2 12.168V14h3.72v-1.878c0-.969.398-1.879.865-2.672-.432-.07-.869-.187-1.318-.117-.414.065-.96.117-1.844.677Z"
      fill="#35374A"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgDepartmenticon);
export default ForwardRef;
