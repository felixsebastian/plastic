import { Icon } from "./Icon";

interface MoodDef {
  icon: Icon;
  iconColor: string;
  borderColor: string;
  color: string;
}

const informative: MoodDef = {
  icon: "Information",
  iconColor: "blue500",
  borderColor: "blue300",
  color: "blue100",
};

const positive: MoodDef = {
  icon: "Success",
  iconColor: "green500",
  borderColor: "green300",
  color: "green100",
};

const negative: MoodDef = {
  icon: "Exclamation",
  iconColor: "red500",
  borderColor: "red300",
  color: "red100",
};

const cautionary: MoodDef = {
  icon: "Exclamation",
  iconColor: "yellow500",
  borderColor: "yellow300",
  color: "yellow100",
};

const moods = {
  informative,
  positive,
  negative,
  cautionary,
};

export default moods;
export type Mood = keyof typeof moods;
