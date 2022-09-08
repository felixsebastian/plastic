import { css } from "@emotion/react";
import { Text, useTheme } from "@specimen/foundation";
import { capitalize } from "lodash";
import { nanoid } from "nanoid";
import { cloneElement, ReactElement, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import Well, { Color as WellColor } from "./Well";

type Placement = "top" | "bottom" | "left" | "right";

interface Props {
  text: string;
  children: ReactElement;
  color?: WellColor;
  placement?: Placement;
}

const opposites: Record<Placement, Placement> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

const arrowRotations: Record<Placement, string> = {
  top: "-45deg",
  bottom: "135deg",
  left: "-135deg",
  right: "45deg",
};

const Tooltip = ({ color = "blue", ...props }: Props) => {
  const { c, s, size } = useTheme();
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { styles, attributes, state } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: props.placement ?? "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, size("md").raw / 2 + size("sm3").raw],
          },
        },
        {
          name: "arrow",
          options: {
            element: arrowRef.current,
          },
        },
        {
          name: "preventOverflow",
          options: {
            altAxis: true,
          },
        },
      ],
    }
  );

  const placement = state?.placement;
  const referenceClass = useRef<string>();

  useEffect(() => {
    if (referenceElement) {
      referenceClass.current = "referenceElement-" + nanoid();
      referenceElement.className += " " + referenceClass.current;
    }
  }, [referenceElement]);

  return (
    <>
      {cloneElement(props.children, { ref: setReferenceElement })}
      <Well
        ref={setPopperElement}
        color={color}
        p="md"
        shadow="sm"
        css={css(
          { ...styles.popper },
          css`
            z-index: 1;
            margin: 0 ${s.md};
            box-sizing: border-box;
            visibility: hidden;
            ${"." + referenceClass.current}:hover + & {
              visibility: visible;
            }
          `,
          css({
            ["margin" + capitalize(opposites[placement as Placement])]: 0,
          })
        )}
        {...attributes.popper}
      >
        <Text size="sm" weight="medium">
          {props.text}
        </Text>
        <div
          ref={arrowRef}
          css={css({
            ...styles.arrow,
            [opposites[placement as Placement]]: (size("md").raw / 2) * -1,
          })}
        >
          <div
            css={css`
              display: block;
              height: ${s.md};
              width: ${s.md};
              background-color: ${c[color + "100"]};
              border: ${s.sm3} solid ${c[color + "300"]};
              clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
              transform: rotate(${arrowRotations[placement as Placement]});
              border-radius: 0 0 0 ${s.sm2};
            `}
          />
        </div>
      </Well>
    </>
  );
};

export default Tooltip;
