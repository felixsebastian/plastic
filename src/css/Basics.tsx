import { css, Global } from "@emotion/react";

const Basics = () => (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);

export default Basics;