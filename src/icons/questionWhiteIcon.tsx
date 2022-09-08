import { SVGProps, Ref, forwardRef } from "react";

const SvgQuestionWhiteicon = (
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
        d="M10 2c-4.416 0-8 3.584-8 8s3.584 8 8 8c4.415 0 8-3.584 8-8s-3.585-8-8-8Z"
        id="question-white_icon_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill={props.fill} xlinkHref="#question-white_icon_svg__a" />
      <path
        d="m12.456 9.4-.72.736c-.576.584-.936 1.064-.936 2.264H9.2V12c0-.88.36-1.68.936-2.264l.992-1.008c.296-.288.472-.688.472-1.128 0-.88-.72-1.6-1.6-1.6-.88 0-1.6.72-1.6 1.6H6.8a3.2 3.2 0 1 1 6.4 0c0 .704-.288 1.344-.744 1.8ZM9.2 15.6h1.6V14H9.2z"
        fill="#FFF"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(SvgQuestionWhiteicon);
export default ForwardRef;
