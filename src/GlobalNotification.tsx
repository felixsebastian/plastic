import { css } from "@emotion/react";
import { Box, Inline, TextProvider, useTheme } from "@specimen/foundation";
import { ReactNode, useState } from "react";
import CloseButton from "./CloseButton";
import Icon from "./Icon";
import moods, { Mood } from "./moods";
import { Provider as LightOnDarkProvider } from "./lightOnDarkContext";

interface Props {
  children?: ReactNode;
  mood?: Mood;
}

const GlobalNotification = ({ children, mood = "informative" }: Props) => {
  const { s } = useTheme();
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  return (
    <Box
      p="sm"
      pr="md"
      bg={moods[mood].color}
      d="flex"
      css={css`
        align-items: center;
        gap: ${s.lg};
      `}
    >
      <LightOnDarkProvider value={false}>
        <Box p="sm" radius="sm" bg={moods[mood].iconColor}>
          <Icon id={moods[mood].icon} size="2xl" color="white" />
        </Box>
        <Inline
          alignY="center"
          css={css`
            column-gap: ${s.sm};
            row-gap: ${s.md};
            flex: 1 0;
          `}
        >
          <TextProvider size="sm">{children}</TextProvider>
        </Inline>
        <CloseButton handleClick={() => setHidden(true)} />
      </LightOnDarkProvider>
    </Box>
  );
};

export default GlobalNotification;
