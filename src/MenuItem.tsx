import { css } from "@emotion/react";
import { Box, Text, useTheme } from "@specimen/foundation";
import { ReactNode } from "react";
import ButtonBox, { NonLinkProps } from "./ButtonBox";
import Icon, { Icon as IconType } from "./Icon";
import Levee from "./Levee";

interface Props {
  icon?: IconType;
  children: ReactNode;
  destructive?: boolean;
}

const MenuItem = ({
  icon,
  destructive,
  children,
  ...props
}: Props & NonLinkProps) => {
  const { c } = useTheme();

  const text = (
    <Box my="sm">
      <Text
        align="left"
        css={css`
          color: ${destructive ? c.red600 : c.text};
          .button-box:hover & {
            color: ${destructive ? c.red600 : c.blue500};
          }
        `}
      >
        {children}
      </Text>
    </Box>
  );

  return (
    <ButtonBox
      p="sm"
      pl={icon ? "sm" : "md"}
      variant="ghost"
      className="button-box"
      w="full"
      h={undefined}
      {...props}
      htmlAttributes={{ role: "menuitem", ...props.htmlAttributes }}
      css={css`
        justify-content: flex-start;
        &:hover {
          background: ${destructive ? c.red100 : c.blue100};
        }
      `}
    >
      {icon ? (
        <Levee
          anchor="left"
          gap="sm"
          head={
            icon && (
              <Icon
                id={icon}
                size="xl"
                color="currentColor"
                css={css`
                  color: ${destructive ? c.red600 : c.gray600};
                  .button-box:hover & {
                    color: ${destructive ? c.red600 : c.blue500};
                  }
                `}
              />
            )
          }
          tail={text}
        />
      ) : (
        text
      )}
    </ButtonBox>
  );
};

export default MenuItem;
