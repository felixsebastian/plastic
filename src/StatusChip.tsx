import { Inline, Text } from "@specimen/foundation";
import Pulse from "./Pulse";
import Chip, { Props as ChipProps } from "./Chip";

const statuses = {
  report: {
    text: "Report",
    color: "grey300",
  },
  live: {
    text: "Live",
    color: "green100",
  },
  draft: {
    text: "Draft",
    color: "orange100",
  },
};

interface Props extends ChipProps {
  status?: keyof typeof statuses;
}

const StatusTag = (props: Props) => {
  const status = statuses[props.status ?? "report"];

  return (
    <Chip color={status.color} {...props}>
      <Inline alignY="center" gap="sm">
        <Text size="sm">{status.text}</Text> <Pulse />
      </Inline>
    </Chip>
  );
};

export default StatusTag;
