import { BoxProps, Inline } from "@specimen/foundation";
import { forwardRef, ReactNode, Ref } from "react";
import Text from "./Text";
import ButtonBox from "./ButtonBox";
import Icon, { Icon as IconId } from "./Icon";
import useButtonStyle from "./useButtonStyle";
import ButtonVariant from "./ButtonVariant";

export interface Props extends BoxProps {
  children: string;
  icon?: IconId | ReactNode;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant;
}

const isIcon = (icon: IconId | ReactNode): icon is IconId =>
  typeof icon === "string";

const Button = (
  { icon, iconPosition = "right", ...props }: Props,
  ref: Ref<HTMLElement>
) => {
  const { color, weight } = useButtonStyle(props.variant);

  if (isIcon(icon)) {
    icon = <Icon color={color} id={icon} />;
  }

  const text = (
    <Text color={color} weight={weight}>
      {props.children}
    </Text>
  );

  const content = [icon, text];

  return (
    <ButtonBox ref={ref} {...props}>
      <Inline alignY="center" gap="md" h="full">
        {iconPosition === "left" ? content : content.reverse()}
      </Inline>
    </ButtonBox>
  );
};

export default forwardRef(Button);
