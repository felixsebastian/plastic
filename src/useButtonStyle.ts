import { useTheme } from "@specimen/foundation";
import useLightOnDark from "./useLightOnDark";
import ButtonVariant from "./ButtonVariant";

interface Style {
  color: any;
  bg: any;
  bgHover: any;
  shadow: any;
  shadowHover: any;
  weight: any;
}

const useButtonStyle = (style = "normal") => {
  const lod = useLightOnDark();
  const { c, s, color } = useTheme();

  const lut: Record<ButtonVariant, Style> = {
    normal: {
      color: undefined,
      bg: "white",
      bgHover: "gray200",
      shadow: `0 0 0 ${s.xxs} ${c.gray500} inset`,
      shadowHover: `0 0 0 ${s.xxs} ${c.purple800} inset`,
      weight: "bold",
    },
    strong: {
      color: "white",
      bg: "blue500",
      bgHover: "blue600",
      shadow: undefined,
      shadowHover: undefined,
      weight: "bold",
    },
    danger: {
      color: "white",
      bg: "red500",
      bgHover: "red600",
      shadow: undefined,
      shadowHover: undefined,
      weight: "bold",
    },
    ghost: {
      color: "blue500",
      bg: "transparent",
      bgHover: "blue100",
      shadow: undefined,
      shadowHover: undefined,
      weight: undefined,
    },
  };

  const lodLut: Record<string, Style> = {
    normal: {
      color: "white",
      bg: color("white").rgba(0.2),
      bgHover: color("white").rgba(0.23),
      shadow: `0 0 0 ${s.xxs} ${color("white").rgba(0.4)} inset`,
      shadowHover: `0 0 0 ${s.xxs} ${color("white").rgba(0.8)} inset`,
      weight: "bold",
    },
    ghost: {
      color: "white",
      bg: "transparent",
      bgHover: color("white").rgba(0.2),
      shadow: undefined,
      shadowHover: undefined,
      weight: undefined,
    },
  };

  return (lod && lodLut[style]) || lut[style];
};

export default useButtonStyle;
