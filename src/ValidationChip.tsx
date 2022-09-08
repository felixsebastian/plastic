import { Inline, Text } from "@specimen/foundation";
import Chip, { Props as ChipProps } from "./Chip";
import Icon from "./Icon";
import moods, { Mood } from "./moods";

interface Props extends ChipProps {
  mood?: Mood;
  children: string;
}

const ValidationChip = (props: Props) => {
  const mood = moods[props.mood ?? "informative"];

  return (
    <Chip radius="lg" pl="sm" color={mood.color} {...props}>
      <Inline alignY="center" h="full" gap="sm">
        <Icon size="lg" id={mood.icon} color={mood.iconColor} />
        <Text>{props.children}</Text>
      </Inline>
    </Chip>
  );
};

export default ValidationChip;
