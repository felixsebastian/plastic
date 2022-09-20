import { css, Global } from "@emotion/react";

const ButtonReset = () => (
  <Global
    styles={css`
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

export default ButtonReset;
