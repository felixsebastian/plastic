import { css, keyframes } from "@emotion/react";
import { useTheme } from "@specimen/foundation";

const initialSize = 2;
const scaleFactor = 9;
const finalSize = initialSize * scaleFactor;
// this positioning has to be calculated as an exact value as scaling will mess with percentage values
const ringPosition = -1 * (finalSize / 2) + initialSize / 2;

const pulsate = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  50%,
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const Pulse = () => {
  const { c, size } = useTheme();
  const marginStart = size("md").raw * 0.35;
  const marginEnd = size("md").raw * 0.15;

  return (
    <span
      css={css`
        margin-inline-start: ${marginStart}px;
        margin-inline-end: ${marginEnd}px;
        width: ${initialSize}px;
        height: ${initialSize}px;
        border-radius: 50%;
        background-color: ${c.blue500};
        display: inline-block;
        position: relative;
        opacity: 0.5;
      `}
    >
      <span
        css={css`
          position: absolute;
          width: ${finalSize}px;
          height: ${finalSize}px;
          left: ${ringPosition}px;
          top: ${ringPosition}px;
          border-radius: 50%;
          background-color: ${c.green500};
          animation: ${pulsate} infinite 2.5s ease-out;
        `}
      />
    </span>
  );
};

export default Pulse;
