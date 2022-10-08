import { css, jsx } from "@emotion/react";
import { Stack, useTheme } from "@specimen/foundation";
import {
  ComponentProps,
  forwardRef,
  JSXElementConstructor,
  MutableRefObject,
  ReactNode,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import mergeRefs from "./mergeRefs";
import { usePopper } from "react-popper";

const useOnClickOutside = (
  refs: RefObject<HTMLElement>[],
  handler: (event: Event) => void
) =>
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        refs.some(
          (r) =>
            r.current &&
            event.target &&
            r.current.contains(event.target as Node)
        )
      ) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);

export interface Props<T extends JSXElementConstructor<any>> {
  triggerComponent: T;
  content: ReactNode | ((close: () => void) => ReactNode);
  triggerProps: ComponentProps<T>;
  triggerRef?: MutableRefObject<HTMLElement>;
  handleClick?: (e: MouseEvent) => void;
  popoverProps?: any;
}

const GenericDropDown = <T extends JSXElementConstructor<any>>({
  triggerComponent: TriggerComponent,
  triggerRef,
  content,
  ...props
}: Props<T>) => {
  const { size } = useTheme();
  const [showingPopover, setShowingPopover] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement>();
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const clickOutsideRef = useRef(null);
  const clickOutsidePopperRef = useRef(null);

  useOnClickOutside([clickOutsideRef, clickOutsidePopperRef], () =>
    setShowingPopover(false)
  );

  const triggerRefs: Ref<HTMLElement>[] = [
    (r: HTMLElement) => setReferenceElement(r),
    clickOutsideRef,
  ];

  if (triggerRef) triggerRefs.push(triggerRef);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, size("sm").raw],
        },
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: ["top-start", "bottom-end", "top-end"],
        },
      },
    ],
  });

  return (
    <>
      {jsx(TriggerComponent, {
        ...props.triggerProps,
        handleClick: (event: any) => {
          const { target } = event;

          if (
            !popperElement ||
            !target ||
            !popperElement.contains(target as Node)
          ) {
            setShowingPopover((s) => !s);
          }

          props.handleClick?.(event);
        },
        ref: mergeRefs(triggerRefs),
      })}
      {showingPopover && (
        <Stack
          ref={(r: any) => {
            setPopperElement(r);
            clickOutsidePopperRef.current = r;
          }}
          {...attributes.popper}
          css={css(
            css`
              z-index: 1;
            `,
            { ...styles.popper }
          )}
          bg="white"
          shadow="lg"
          p="sm"
          radius="sm"
          gap={null}
          {...props.popoverProps}
        >
          {typeof content === "function"
            ? content(() => setShowingPopover(false))
            : content}
        </Stack>
      )}
    </>
  );
};

export default forwardRef(GenericDropDown);
