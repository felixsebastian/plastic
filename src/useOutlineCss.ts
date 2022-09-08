import { css, CSSObject } from "@emotion/react";
import { useTheme, Theme } from "@specimen/foundation";

export const getOutlineBoxProps = (
  theme: Theme,
  light?: boolean
): CSSObject => {
  const { size, c, s } = theme;

  return {
    position: "absolute",
    background: "transparent",
    borderRadius: size("sm").raw + 2,
    border: `${s.sm3} solid ${c[light ? "blue300" : "outline"]}`,
    top: (size("sm3").raw + 1) * -1,
    left: (size("sm3").raw + 1) * -1,
    right: (size("sm3").raw + 1) * -1,
    bottom: (size("sm3").raw + 1) * -1,
  };
};

const useOutlineCss = (light?: boolean) => {
  const theme = useTheme();

  return css`
    position: relative;
    outline: none;
    &:focus-visible {
      &:before {
        content: " ";
        ${css(getOutlineBoxProps(theme, light))}
      }
    }
  `;
};

export default useOutlineCss;
