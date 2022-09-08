import Button, { Props as ButtonProps } from "./Button";
import GenericDropDown, {
  Props as GenericDropDownProps,
} from "./GenericDropDown";

interface Props
  extends Omit<
      GenericDropDownProps<typeof Button>,
      "triggerComponent" | "content" | "triggerProps"
    >,
    Omit<ButtonProps, "children"> {
  text?: string;
  children?: GenericDropDownProps<typeof Button>["content"];
}

const Menu = ({ children, ...props }: Props) => (
  <GenericDropDown
    triggerComponent={Button}
    content={children}
    triggerProps={{
      icon: "ChevronDown",
      role: "menu",
      ...props,
      children: props.text,
    }}
  />
);

export default Menu;
