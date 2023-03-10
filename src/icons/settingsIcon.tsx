import { SVGProps, Ref, forwardRef } from "react";

const SvgSettingsicon = (
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
        d="M16.112 10.784c.033-.256.058-.512.058-.784s-.025-.528-.058-.784l1.736-1.32a.395.395 0 0 0 .098-.512l-1.645-2.768c-.098-.176-.32-.24-.501-.176l-2.048.8a6.051 6.051 0 0 0-1.39-.784l-.312-2.12A.4.4 0 0 0 11.646 2h-3.29a.398.398 0 0 0-.402.336l-.313 2.12c-.501.2-.962.472-1.39.784l-2.047-.8a.407.407 0 0 0-.502.176L2.057 7.384a.387.387 0 0 0 .099.512l1.736 1.32c-.033.256-.059.52-.059.784s.026.528.059.784l-1.736 1.32a.396.396 0 0 0-.099.512l1.645 2.768c.099.176.32.24.502.176l2.047-.8c.428.32.889.584 1.39.784l.313 2.12a.398.398 0 0 0 .403.336h3.29a.4.4 0 0 0 .403-.336l.312-2.12c.502-.2.962-.472 1.39-.784l2.048.8c.19.072.403 0 .501-.176l1.645-2.768a.395.395 0 0 0-.098-.512l-1.736-1.32Zm-6.11 2.016c-1.587 0-2.879-1.256-2.879-2.8 0-1.544 1.292-2.8 2.879-2.8S12.88 8.456 12.88 10c0 1.544-1.291 2.8-2.878 2.8Z"
        id="settings_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#settings_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgSettingsicon);
export default ForwardRef;
