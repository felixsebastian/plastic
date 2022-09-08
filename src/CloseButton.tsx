import ButtonElement, { Props as ButtonElementProps } from "./ButtonElement";
import Icon from "./Icon";

const CloseButton = (props: ButtonElementProps) => (
  <ButtonElement {...props}>
    <Icon id="Close" size="lg" />
  </ButtonElement>
);

export default CloseButton;
