import { SVGProps, Ref, forwardRef } from "react";

const SvgThumbsDownicon = (
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
        d="M5.91 3.183c-.566 0-1.05.341-1.254.832L2.597 8.821c-.061.156-.095.32-.095.497v1.364c0 .75.613 1.363 1.363 1.363h4.301L7.52 15.16l-.02.218c0 .28.115.539.3.723l.722.716 4.492-4.493c.245-.245.395-.586.395-.96V4.546c0-.75-.613-1.364-1.363-1.364H5.91Zm8.862 8.18h2.726v-8.18h-2.726v8.18Z"
        id="thumbs-down_icon_svg__a"
      />
    </defs>
    <use fill={fill} xlinkHref="#thumbs-down_icon_svg__a" fillRule="evenodd" />
  </svg>
);

const ForwardRef = forwardRef(SvgThumbsDownicon);
export default ForwardRef;
