import { css, Global } from "@emotion/react";
import { SpecimenProvider, useTheme } from "@specimen/foundation";
import { ReactNode } from "react";
import theme from "./theme";

interface Props {
  children?: ReactNode;
}

const GlobalCss = () => {
  const { color, c } = useTheme();

  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }

        ::placeholder {
          color: ${c.gray500};
          opacity: 1;
        }

        :-ms-input-placeholder {
          color: ${c.gray500};
        }

        ::-ms-input-placeholder {
          color: ${c.gray500};
        }

        .lod::placeholder {
          color: ${c.gray700};
          color: ${color("white").rgba(0.6)};
          opacity: 1;
        }

        .lod:-ms-input-placeholder {
          color: ${c.gray700};
          color: ${color("white").rgba(0.6)};
        }

        .lod::-ms-input-placeholder {
          color: ${c.gray700};
          color: ${color("white").rgba(0.6)};
        }

        button {
          padding: 0;
          margin: 0;
          border: none;
          cursor: pointer;
          display: block;
          text-align: left;
          background-color: transparent;
        }
      `}
    />
  );
};

const KoanProvider = (props: Props) => (
  <SpecimenProvider theme={theme}>
    <GlobalCss />
    {props.children}
  </SpecimenProvider>
);

export default KoanProvider;
