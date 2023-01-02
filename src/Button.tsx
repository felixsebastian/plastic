import { Inline } from "@specimen/foundation";
import { forwardRef, Ref } from "react";
import Text from "./Text";
import ButtonBox, { ButtonBoxProps } from "./ButtonBox";
import Icon, { Icon as IconId } from "./Icon";
import useButtonStyle from "./useButtonStyle";

export type Props = ButtonBoxProps & {
  icon?: IconId;
  iconPosition?: "left" | "right";
};

const Button = (
  { icon, iconPosition = "left", ...props }: Props,
  ref: Ref<HTMLElement>
) => {
  const { color, weight } = useButtonStyle(props.variant);

  const text = (
    <Text as="div" color={color} weight={weight}>
      {props.children}
    </Text>
  );

  const content = [icon && <Icon color={color} id={icon} />, text];

  return (
    <ButtonBox ref={ref} {...props}>
      <Inline alignY="center" gap="md" h="full">
        {iconPosition === "left" ? content : content.reverse()}
      </Inline>
    </ButtonBox>
  );
};

export default forwardRef(Button);
