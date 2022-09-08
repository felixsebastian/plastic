import { SVGProps, Ref, forwardRef } from "react";

const SvgWritingicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size ?? "1em"}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    ref={ref}
    {...props}
  >
    <defs>
      <path
        d="M1 18.55h18.002V15.7H1v2.85ZM16.53 4.333a.689.689 0 0 0 0-1.009L14.78 1.66a.78.78 0 0 0-1.061 0L12.25 3.052l2.813 2.673 1.466-1.393Zm-2.216 2.105-2.813-2.672-7.5 7.126v2.672h2.812l7.501-7.126Z"
        id="writing_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#writing_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgWritingicon);
export default ForwardRef;
