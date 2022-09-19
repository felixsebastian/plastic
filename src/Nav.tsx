import { css } from "@emotion/react";
import { Box, Inline, Stack, Text, useTheme } from "@specimen/foundation";
import Avatar from "./Avatar";
import Divider from "./Divider";
import Levee from "./Levee";
import Logo from "./Logo";
import MenuItem from "./MenuItem";
import NavButton from "./NavButton";
import NavMenu from "./NavMenu";

const useActiveCss = () => {
  const { s, c, color } = useTheme();

  return {
    line: css`
      position: relative;
      &:before {
        content: " ";
        position: absolute;
        background-color: ${c.white};
        top: 0;
        left: 0;
        right: 0;
        height: ${s.xs};
        border-bottom-left-radius: ${s.xs};
        border-bottom-right-radius: ${s.xs};
      }
    `,
    button: css`
      color: ${color("white").rgba(0.8)};
      &:hover {
        background-color: ${color("white").rgba(0.2)};
      }
    `,
  };
};

const Nav = () => {
  const activeCss = useActiveCss();

  return (
    <Levee
      px="lg"
      gap="lg"
      alignY="center"
      anchor="right"
      tail={
        <Inline alignY="center">
          <Logo />
          <Inline gap="none">
            <Box py="md" css={activeCss.line}>
              <NavButton active>Home</NavButton>
            </Box>
            <Box py="md">
              <NavMenu label="Feedback">
                <Box p="sm">
                  <MenuItem>Surveys</MenuItem>
                </Box>
                <Divider type="menu" />
                <Stack
                  p="sm"
                  css={css`
                    max-width: 300px;
                  `}
                >
                  <Box mt="md" ml="sm">
                    <Text size="sm" weight="bold">
                      Other actions
                    </Text>
                  </Box>
                  <MenuItem icon="Edit" destructive>
                    Requests about you lorem ipsum dolor
                  </MenuItem>
                  <MenuItem icon="Trash">Skills summary</MenuItem>
                  <MenuItem icon="Information">More info</MenuItem>
                </Stack>
              </NavMenu>
            </Box>
            <Box py="md">
              <NavMenu label="1-on-1s">
                <Box p="sm">
                  <MenuItem>Skills summary</MenuItem>
                </Box>
              </NavMenu>
            </Box>
            <Box py="md">
              <NavButton>Goals</NavButton>
            </Box>
            <Box py="md">
              <NavButton>Reviews</NavButton>
            </Box>
            <Box py="md">
              <NavButton>Development</NavButton>
            </Box>
          </Inline>
        </Inline>
      }
      head={
        <Inline alignY="center">
          <NavButton icon="Question">Help</NavButton>
          <NavButton icon="Notification" />
          <Inline gap="xs">
            <Avatar name="Jane Doe" size="md" />
            <Avatar name="Culture Amp" size="md" />
          </Inline>
        </Inline>
      }
    />
  );
};

export default Nav;
