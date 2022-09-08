import { SVGProps, Ref, forwardRef } from "react";

const SvgUserSettingsicon = (
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
        d="M16.036 9.917a1.168 1.168 0 0 1-1.167-1.167c0-.643.524-1.166 1.167-1.166a1.168 1.168 0 0 1 0 2.333Zm2.477-.84c.012-.107.023-.217.023-.327 0-.11-.011-.22-.023-.326l.702-.55a.163.163 0 0 0 .04-.214l-.667-1.153a.162.162 0 0 0-.203-.073l-.83.333a2.542 2.542 0 0 0-.563-.327l-.127-.883a.163.163 0 0 0-.163-.14h-1.334a.162.162 0 0 0-.162.14l-.127.883c-.204.084-.39.194-.563.327l-.83-.333a.167.167 0 0 0-.203.073l-.668 1.153a.168.168 0 0 0 .04.214l.703.55a2.766 2.766 0 0 0-.022.326c0 .114.01.22.022.327l-.702.55a.168.168 0 0 0-.041.213l.668 1.154c.039.073.126.103.203.073l.83-.333c.172.13.359.243.563.326l.127.884c.01.08.08.14.162.14h1.334c.083 0 .153-.06.163-.14l.127-.884c.204-.083.39-.193.563-.326l.83.333c.073.027.164 0 .203-.073l.667-1.154a.167.167 0 0 0-.04-.213l-.702-.55ZM7.388 10a3.332 3.332 0 1 0 0-6.666 3.332 3.332 0 1 0 0 6.666Zm0 1.667C5.163 11.667.722 12.784.722 15v1.667h13.333V15c0-2.216-4.442-3.333-6.667-3.333Z"
        id="user-settings_icon_svg__a"
      />
    </defs>
    <use
      fill={props.fill}
      xlinkHref="#user-settings_icon_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

const ForwardRef = forwardRef(SvgUserSettingsicon);
export default ForwardRef;
