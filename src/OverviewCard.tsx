import Icon from "./Icon";
import Card from "./Card";
import { Inline, Stack, Text } from "@specimen/foundation";

const OverviewCard = (props: any) => (
  <Card {...props}>
    <Stack gap="lg">
      <Stack gap="sm">
        <Text size="lg" weight="bold">
          Product Growth
        </Text>
        <Inline alignY="center" gap="md">
          <Text>Camp</Text>
          <Inline gap="sm2" alignY="center">
            <Icon id="User" />
            <Text>4</Text>
          </Inline>
        </Inline>
      </Stack>
      <Inline alignY="bottom" gap="none">
        <Text size="lg12" weight="bold">
          97
        </Text>
        <Text size="lg3">%</Text>
      </Inline>
      <Inline alignY="center" gap="sm">
        <Inline gap="sm2" alignY="center">
          <Icon id="DeltaPositive" color="favorable" />
          <Text size="sm">22% increase</Text>
        </Inline>
        <Inline gap="sm2" alignY="center">
          <Icon id="ArrowUp" color="favorable" />
          <Text size="sm">3% from benchmark</Text>
        </Inline>
      </Inline>
    </Stack>
  </Card>
);

export default OverviewCard;
