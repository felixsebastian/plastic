import { Box, BoxProps } from "@specimen/foundation";
import { ReactNode } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
  color?: "blue" | "green" | "yellow" | "red" | "orange" | "purple";
}

const Card = (props: Props) => (
  <Box
    shadow="sm"
    p="md"
    bg={props.color ? props.color + "100" : undefined}
    radius="sm"
    {...props}
  >
    {props.children}
  </Box>
);

export default Card;
