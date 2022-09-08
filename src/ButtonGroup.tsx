import { Inline } from "@specimen/foundation";
import { Children, cloneElement } from "react";

// [null, "start"].includes(groupPosition) &&
//   css`
//     border-top-left-radius: ${s.sm};
//     border-bottom-left-radius: ${s.sm};
//   `,
// [null, "end"].includes(groupPosition) &&
//   css`
//     border-top-right-radius: ${s.sm};
//     border-bottom-right-radius: ${s.sm};
// `

const ButtonGroup = (props: any) => {
  const getPosition = (index: number) => {
    switch (index) {
      case 0:
        return "start";
      case props.children.length - 1:
        return "end";
      default:
        return "middle";
    }
  };

  return (
    <Inline gap="none">
      {Children.map(props.children, (button, index) =>
        cloneElement(button, { __groupPosition: getPosition(index) })
      )}
    </Inline>
  );
};

export default ButtonGroup;
