import { SVGProps, Ref, forwardRef } from "react";

const SvgQuestionicon = (
  props: SVGProps<SVGSVGElement> & { fill: string; size: string },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    width={props.size}
    height={props.size}
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M10 2c4.415 0 8 3.584 8 8s-3.585 8-8 8c-4.416 0-8-3.584-8-8s3.584-8 8-8Zm2.456 7.4a2.546 2.546 0 0 0 .744-1.8 3.2 3.2 0 1 0-6.4 0h1.6c0-.88.72-1.6 1.6-1.6.88 0 1.6.72 1.6 1.6 0 .44-.176.84-.472 1.128l-.992 1.008A3.22 3.22 0 0 0 9.2 12v.4h1.6c0-1.2.36-1.68.936-2.264l.72-.736ZM9.2 15.6h1.6V14H9.2v1.6Z"
      fill={props.fill}
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgQuestionicon);
export default ForwardRef;
