import { css } from "@emotion/react";
import { Box, useTheme } from "@specimen/foundation";
import { omit } from "lodash";

const Levee = ({ anchor = "top", ...props }: any) => {
  const { s } = useTheme();

  const tail = (
    <div
      css={css`
        flex: 1 0 0;
        min-width: 0;
        min-height: 0;
      `}
    >
      {props.tail}
    </div>
  );

  const head = (
    <div
      css={css`
        flex: 0 0 auto;
      `}
    >
      {props.head}
    </div>
  );

  const getAlignItems = () => {
    if (props.center) return "center";
    const alignProp = ["left", "right"].includes(anchor) ? "alignY" : "alignX";
    return props[alignProp] ?? "flex-start";
  };

  return (
    <Box
      d="flex"
      w="full"
      h="full"
      {...omit(props, ["head", "tail", "alignX", "alignY"])}
      css={css({
        flexDirection: ["left", "right"].includes(anchor) ? "row" : "column",
        gap: s[props.gap],
        alignItems: getAlignItems(),
      })}
    >
      {["top", "left"].includes(anchor) ? (
        <>
          {head}
          {tail}
        </>
      ) : (
        <>
          {tail}
          {head}
        </>
      )}
    </Box>
  );
};

export default Levee;
