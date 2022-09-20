import { createSize } from "@specimen/foundation";
import { pick, stubTrue } from "lodash";
import { createColor, linearSize, tshirts } from "@specimen/foundation";
import fontMetricsInter from "@capsizecss/metrics/inter";
import { flow, cond, isNull, isNumber } from "lodash/fp";
import { heartTheme } from "@kaizen/design-tokens";

// --layout-breakpoints-medium: 768px;
// --layout-breakpoints-large: 1080px;

const flattenKeys = (obj: any, result = {}, base = "") => {
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v === "object") {
      result = { ...result, ...flattenKeys(v, result, `${base}${k}`) };
    } else {
      result[base + k] = v;
    }
  }

  return result;
};

const colors: Record<string, string> = {
  ...flattenKeys(heartTheme.color),
  ...heartTheme.dataViz,
  text: heartTheme.color.purple[800],
  link: heartTheme.color.blue[500],
  outline: heartTheme.color.blue[500],
};

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
    metrics: fontMetricsInter as any,
  },
  tiemposHeadline: {
    name: '"Tiempos Headline", serif',
    metrics: {
      familyName: "Tiempos Headline",
      capHeight: 708,
      ascent: 1028,
      descent: -217,
      lineGap: 0,
      unitsPerEm: 1000,
      xHeight: 0,
    },
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
  ...pick(heartTheme, ["layout"]),
};

export default theme;
