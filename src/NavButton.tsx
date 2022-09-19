import { Inline, Text, useTheme } from "@specimen/foundation";
import { forwardRef, Ref } from "react";
import ButtonBox from "./ButtonBox";
import Icon from "./Icon";

const NavButton = (
  { label, popoverNode, icon, ...props }: any,
  ref: Ref<HTMLElement>
) => {
  const { color } = useTheme();

  return (
    <ButtonBox ref={ref} variant="ghost" px="md" {...props}>
      <Inline alignY="center" h="full">
        {icon && <Icon id={icon} color={color("white").rgba(0.6)} />}
        {props.children && (
          <Text
            size="md"
            weight="medium"
            color={color("white").rgba(props.active ? 1 : 0.8)}
          >
            {props.children}
          </Text>
        )}
      </Inline>
      {popoverNode}
    </ButtonBox>
  );
};

export default forwardRef(NavButton);
