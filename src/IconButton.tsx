import { Center } from "@specimen/foundation";
import { forwardRef, Ref } from "react";
import ButtonBox from "./ButtonBox";
import Icon from "./Icon";
import useButtonStyle from "./useButtonStyle";

const IconButton = forwardRef(function Button(
  { icon, iconPosition = "right", variant = "ghost", ...props }: any,
  ref: Ref<HTMLElement>
) {
  const { color } = useButtonStyle(variant);

  return (
    <ButtonBox variant={variant} px="md" {...props} ref={ref}>
      <Center>
        <Icon color={color} id={icon} />
      </Center>
      {props.popoverNode}
    </ButtonBox>
  );
});

export default IconButton;
