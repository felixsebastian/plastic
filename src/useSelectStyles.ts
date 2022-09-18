import { StylesConfig } from "react-select";
import fontMetrics from "@capsizecss/metrics/roboto";
import { createStyleObject } from "@capsizecss/core";
import { useTheme } from "@specimen/foundation";
import { getOutlineBoxProps } from "./useOutlineCss";

export type Variant = "normal" | "ghost" | "light";

const useSelectStyles = (variant: Variant, width?: string): StylesConfig => {
  const theme = useTheme();
  const { s, c, size, fontSize, color, shadow } = theme;

  const variantFocusOutlines: Record<Variant, string> = {
    light: "blue300",
    ghost: "outline",
    normal: "outline",
  };

  const variantShadows: Record<Variant, string> = {
    light: "none",
    ghost: "none",
    normal: `0 0 0 ${s.xxs} ${c.gray500} inset`,
  };

  const variantBackgrounds: Record<Variant, string> = {
    light: color("white").rgba(0.1),
    ghost: "transparent",
    normal: c.white,
  };

  const variantBackgroundsHover: Record<Variant, string> = {
    light: color("white").rgba(0.2),
    ghost: c.blue100,
    normal: c.gray100,
  };

  const variantTextColor: Record<Variant, string> = {
    light: "white",
    ghost: "blue500",
    normal: "text",
  };

  const variantFontWeights: Record<Variant, number> = {
    light: 300,
    ghost: 400,
    normal: 500,
  };

  const variantPlaceholderColors: Record<Variant, string> = {
    light: color("white").rgba(0.8),
    ghost: c.gray500,
    normal: c.gray500,
  };

  return {
    container: (provided) => ({
      ...provided,
      borderWidth: 0,
      width: width ? size(width).raw : undefined,
      minWidth: "max-content",
      outline: "none",
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: variantShadows[variant],
      borderStyle: "none",
      background: state.isFocused
        ? variantBackgroundsHover[variant]
        : variantBackgrounds[variant],
      padding: `0 ${s.md}`,
      height: s.xxl,
      "&:hover": {
        background: variantBackgroundsHover[variant],
      },

      // outline
      position: "relative",
      outline: "none",
      ...(state.isFocused && {
        "&:before": {
          content: '""',
          position: "absolute",
          ...getOutlineBoxProps(theme, variant === "light"),
        },
      }),
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
      overflow: "visible",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: variantPlaceholderColors[variant],
    }),
    singleValue: (provided) => ({
      ...provided,
      color: c[variantTextColor[variant]],
      overflow: "visible",
      margin: 0,
      fontFamily: "Inter",
      fontWeight: variantFontWeights[variant],
      ...createStyleObject({
        capHeight: fontSize("md").raw,
        lineGap: fontSize("md").raw,
        fontMetrics,
      }),
    }),
    input: (provided) => ({
      ...provided,
      color: c[variantTextColor[variant]],
      margin: 0,
      padding: 0,
      display: "block",
      ...createStyleObject({
        capHeight: fontSize("md").raw,
        lineGap: fontSize("md").raw,
        fontMetrics,
      }),
    }),
    option: (provided, state) => ({
      ...provided,
      padding: s.md,
      borderRadius: s.sm,
      color: color("text").hex,
      "&:hover": {
        color: color("blue500").hex,
      },
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      padding: 0,
      color: color("white").hex + " !important",
    }),
    indicatorsContainer: () => ({
      position: "relative",
      display: "flex",
      alignItems: "center",
      height: fontSize("md").raw,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    menu: (provided) => ({
      ...provided,
      boxShadow: shadow("lg"),
    }),
    menuList: (provided) => ({
      ...provided,
      padding: s.sm,
    }),
  };
};

export default useSelectStyles;
