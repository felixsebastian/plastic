import { SVGProps, Ref, forwardRef } from "react";

const SvgThumbsUpicon = (
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
        d="M5.228 16.817v-8.18H2.502v8.18h2.726Zm10.907-8.862h-4.301l.647-3.115.02-.218c0-.28-.115-.539-.3-.723l-.722-.716-4.485 4.493a1.333 1.333 0 0 0-.402.96v6.817c0 .75.613 1.364 1.363 1.364h6.135c.566 0 1.05-.341 1.254-.832l2.059-4.806c.061-.156.095-.32.095-.497V9.318c0-.75-.613-1.363-1.363-1.363Z"
        id="thumbs-up_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#thumbs-up_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgThumbsUpicon);
export default ForwardRef;
