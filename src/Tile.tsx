import { Stack, Text } from "@specimen/foundation";
import { ReactNode } from "react";
import Card from "./Card";

interface Props {
  heading: string;
  subheading?: string;
  children?: ReactNode;
  bg?: string;
}

const Tile = ({ subheading, ...props }: Props) => (
  <Card p="lg" pt="xl" bg={props.bg}>
    <Stack alignX="center">
      <Text size="2xl" weight="bold">
        {props.heading}
      </Text>
      {subheading && (
        <Text size="sm" color="gray600">
          {subheading}
        </Text>
      )}
      {props.children}
    </Stack>
  </Card>
);

export default Tile;
