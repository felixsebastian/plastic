import { css } from "@emotion/react";
import {
  Box,
  Inline,
  Text,
  TextProvider,
  useTheme,
} from "@specimen/foundation";
import { ReactNode, useState } from "react";
import CloseButton from "./CloseButton";
import Icon from "./Icon";
import moods, { Mood } from "./moods";
import { Provider as LightOnDarkProvider } from "./lightOnDarkContext";
import ButtonElement from "./ButtonElement";

interface Props {
  title: string;
  children?: ReactNode;
  mood?: Mood;
}

const Notification = ({ title, children, mood = "informative" }: Props) => {
  const { s, c } = useTheme();
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <Box
      p="md"
      bg={moods[mood].color}
      radius="sm"
      d="flex"
      css={css`
        border: ${s.sm3} solid ${c[moods[mood].borderColor]};
        align-items: flex-start;
        gap: ${s.md};
      `}
    >
      <LightOnDarkProvider value={false}>
        <Icon id={moods[mood].icon} size="lg" color={moods[mood].iconColor} />

        <Inline
          my="sm"
          alignY="center"
          css={css`
            column-gap: ${s.sm};
            row-gap: ${s.md};
            flex: 1 0;
          `}
        >
          <Text weight="bold" size="sm">
            {title}
          </Text>
          <TextProvider size="sm">{children}</TextProvider>
        </Inline>
        <CloseButton handleClick={() => setHidden(true)} />
      </LightOnDarkProvider>
    </Box>
  );
};

export default Notification;
