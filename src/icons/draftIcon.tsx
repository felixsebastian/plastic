import { SVGProps, Ref, forwardRef } from "react";

const SvgDrafticon = (
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
        d="M15.376 2.636c.9 0 1.637.737 1.637 1.637v13.09c0 .9-.737 1.637-1.637 1.637H4.631c-.9 0-1.636-.736-1.636-1.636V4.273c0-.9.736-1.637 1.636-1.637h3.062A2.463 2.463 0 0 1 10 1c1.064 0 1.964.687 2.307 1.636h3.07ZM11.15 8.801l-4.813 4.442v1.666h1.805l4.813-4.443-1.805-1.665Zm2.105-1.314a.511.511 0 0 0-.682 0l-.942.87 1.806 1.665.941-.869a.421.421 0 0 0 0-.628l-1.123-1.038Zm-2.437-4.032A.82.82 0 0 0 10 2.636a.82.82 0 0 0-.818.819c0 .45.368.818.818.818a.82.82 0 0 0 .818-.818Z"
        id="draft_icon_svg__a"
      />
    </defs>
    <use fill={props.fill} xlinkHref="#draft_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgDrafticon);
export default ForwardRef;
