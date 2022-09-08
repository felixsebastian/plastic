import { Center, Span, Text } from "@specimen/foundation";
import { forwardRef, ReactNode, Ref } from "react";
import ButtonBox from "./ButtonBox";
import GenericDropDown, {
  Props as GenericDropDownProps,
} from "./GenericDropDown";

interface ButtonProps {
  label?: string;
  value: string;
  popoverNode?: ReactNode;
}

const Button = forwardRef(function Button(
  { label, value, popoverNode, ...props }: ButtonProps,
  ref: Ref<HTMLElement>
) {
  return (
    <ButtonBox variant="ghost" bg="blue100" {...props} ref={ref}>
      <Center>
        <Text color="blue500">
          {label && <Span weight="bold">{label}:</Span>} {value}
        </Text>
      </Center>
      {popoverNode}
    </ButtonBox>
  );
});

interface Props
  extends Omit<
      GenericDropDownProps<typeof Button>,
      "triggerComponent" | "content" | "triggerProps"
    >,
    ButtonProps {
  children?: GenericDropDownProps<typeof Button>["content"];
}

const FilterMenu = ({ children, ...props }: Props) => (
  <GenericDropDown
    triggerComponent={Button}
    content={children}
    triggerProps={props}
  />
);

export default FilterMenu;
