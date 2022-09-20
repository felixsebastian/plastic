import { css, Global } from "@emotion/react";
import { useTheme } from "@specimen/foundation";

const Placeholder = () => {
  const { color, c } = useTheme();

  return (
    <Global
      styles={css`
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
      `}
    />
  );
};

export default Placeholder;
