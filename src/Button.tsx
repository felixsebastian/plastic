import { BoxProps, Inline } from "@specimen/foundation";
import { forwardRef, ReactNode, Ref } from "react";
import Text from "./Text";
import ButtonBox from "./ButtonBox";
import Icon, { Icon as IconId } from "./Icon";
import useButtonStyle from "./useButtonStyle";
import ButtonVariant from "./ButtonVariant";

export interface Props extends BoxProps {
  children: string;
  icon?: string | ReactNode;
  iconPosition?: "left" | "right";
  variant?: ButtonVariant;
}

const Button = (
  { icon, iconPosition = "right", ...props }: Props,
  ref: Ref<HTMLElement>
) => {
  const { color, weight } = useButtonStyle(props.variant);

  if (typeof icon === "string") {
    icon = <Icon color={color} id={icon as IconId} />;
  }

  const text = (
    <Text color={color} weight={weight}>
      {props.children}
    </Text>
  );

  return (
    <ButtonBox ref={ref} {...props}>
      <Inline alignY="center" gap="md" h="full">
        {iconPosition === "left" ? (
          <>
            {icon}
            {text}
          </>
        ) : (
          <>
            {text}
            {icon}
          </>
        )}
      </Inline>
    </ButtonBox>
  );
};

export default forwardRef(Button);
