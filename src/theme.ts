import { createSize } from "@specimen/foundation";
import { stubTrue } from "lodash";
import { createColor, linearSize, tshirts } from "@specimen/foundation";
import fontMetricsInter from "@capsizecss/metrics/inter";
import { flow, cond, isNull, isNumber } from "lodash/fp";

// --layout-breakpoints-medium: 768px;
// --layout-breakpoints-large: 1080px;

const colors: Record<string, string> = {
  white: "#ffffff",
  border: "e1e2ea",
  favorable: "#7dd5bd",
  unfavorable: "#e68d97",

  purple100: "#f4edf8",
  purple200: "#dfc9ea",
  purple300: "#c9a5dd",
  purple400: "#ae67b1",
  purple500: "#844587",
  purple600: "#5f3361",
  purple700: "#4a234d",
  purple800: "#2f2438",
  blue100: "#e6f6ff",
  blue200: "#bde2f5",
  blue300: "#73c0e8",
  blue400: "#008bd6",
  blue500: "#0168b3",
  blue600: "#004970",
  blue700: "#003157",
  green100: "#e8f8f4",
  green200: "#c4ede2",
  green300: "#8fdbc7",
  green400: "#5dcbad",
  green500: "#44a289",
  green600: "#2c7d67",
  green700: "#22594a",
  yellow100: "#fff9e4",
  yellow200: "#ffeeb3",
  yellow300: "#ffe36e",
  yellow400: "#ffca4d",
  yellow500: "#ffb600",
  yellow600: "#c68600",
  yellow700: "#876400",
  red100: "#fdeaee",
  red200: "#f9c2cb",
  red300: "#f597a8",
  red400: "#e0707d",
  red500: "#c93b55",
  red600: "#a82433",
  red700: "#6c1e20",
  orange100: "#fff0e8",
  orange200: "#ffd1b9",
  orange300: "#ffb08a",
  orange400: "#ff9461",
  orange500: "#e96c2f",
  orange600: "#b74302",
  orange700: "#903c00",
  gray100: "#f9f9f9",
  gray200: "#f4f4f5",
  gray300: "#eaeaec",
  gray400: "#cdcdd0",
  gray500: "#8c8c97",
  gray600: "#524e56",
};

// mandatory
// text: "#2f2438",
// link: "#0b63ff",
// outline: "#0168b3",
colors.text = colors["purple800"];
colors.link = colors["blue500"];
colors.outline = colors["blue500"];

const getColor = (c: keyof typeof colors) => createColor(colors[c] ?? c);

const shadows = {
  sm: `0px 3px 16px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)`,
  lg: `0px 8px 40px rgba(0, 0, 0, 0.08), 0px 3px 9px rgba(0, 0, 0, 0.1)`,
};

const getShadow = (s: keyof typeof shadows) => shadows[s];
const add = (o: number) => (n: number) => isNumber(n) ? n + o : n;

const size = flow(
  tshirts,
  add(-1),
  cond([
    [(n: unknown) => n === "none", () => createSize(0)],
    [isNull, () => createSize(null)],
    [(n: number) => n < 0, (n: number) => createSize(24 / 2 ** Math.abs(n))],
    [stubTrue, linearSize(24, 12)],
  ])
);

const fonts = {
  inter: {
    name: '"Inter", "Noto Sans", Helvetica, Arial, sans-serif',
    metrics: fontMetricsInter,
  },
};

const timing = {
  instant: 0,
  immediate: 100,
  rapid: 200,
  fast: 300,
  slow: 400,
  deliberate: 700,
};

const animationEasing = {
  "ease-in-out": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  "ease-in": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  "ease-out": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  linear: "linear",
  "bounce-in": "cubic-bezier(0.485, 0.155, 0.24, 1.245)",
  "bounce-out": "cubic-bezier(0.485, 0.155, 0.515, 0.845)",
  "bounce-in-out": "cubic-bezier(0.76, -0.245, 0.24, 1.245)",
};

const theme = {
  size,
  fontSize: flow(tshirts, linearSize(12, 2)),
  color: getColor,
  shadow: getShadow,
  defaultFont: "inter",
  fonts,
  timing,
  animationEasing,
};

export default theme;
