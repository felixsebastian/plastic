import { css } from "@emotion/react";
import { Box, useTheme } from "@specimen/foundation";
import useLightOnDark from "./useLightOnDark";

interface Props {
  type?: "normal" | "menu";
}

const Divider = (props: Props) => {
  const { c, s, ...theme } = useTheme();
  const lod = useLightOnDark();
  let color, opacity;

  if (props.type === "menu") {
    color = "gray300";
    opacity = 1;
  } else {
    opacity = 1 / 10;
    color = lod ? "white" : "gray600";
  }

  return (
    <Box
      as="hr"
      css={css`
        margin: 0;
        border-width: 0;
        border-top: ${props.type === "menu" ? s.xxxs : s.xs} solid;
        border-color: ${c.gray200};
        border-color: ${theme.color(color).rgba(opacity)};
      `}
    />
  );
};

export default Divider;
