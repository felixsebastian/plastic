import { Stack } from "@specimen/foundation";
import { nanoid } from "nanoid";
import Radio, { Props as RadioProps } from "./Radio";

interface Item {
  label: string;
  value: string;
}

interface Props extends Pick<RadioProps, "labelProps"> {
  state: string | null;
  handleChange: (value: string) => void;
  items: Item[];
}

const RadioList = (props: Props) => {
  const name = nanoid();

  return (
    <Stack gap="xs">
      {props.items.map(({ value, ...item }) => (
        <Radio
          {...props}
          key={value}
          name={name}
          label={item.label}
          state={props.state === value}
          handleClick={() => props.handleChange?.(value)}
        />
      ))}
    </Stack>
  );
};

export default RadioList;
