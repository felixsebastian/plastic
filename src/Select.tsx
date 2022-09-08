import { css } from "@emotion/react";
import { Text, useTheme } from "@specimen/foundation";
import ReactSelect, {
  ClearIndicatorProps,
  MultiValueProps,
  OptionProps,
  Props as ReactSelectProps,
} from "react-select";
import Icon from "./Icon";
import useLightOnDark from "./useLightOnDark";
import Tag from "./Tag";
import useSelectStyles, { Variant } from "./useSelectStyles";
import ButtonElement from "./ButtonElement";
import { createContext, forwardRef, Ref, useContext } from "react";

interface Props extends ReactSelectProps {
  width?: string;
  variant?: Variant;
}

const variantIconColors: Record<Variant, string> = {
  normal: "gray600",
  light: "white",
  ghost: "blue500",
};

const variantContext = createContext<Variant>("normal");
const VariantProvider = variantContext.Provider;
const useVariant = () => useContext(variantContext);

const Option = (props: OptionProps) => (
  <div
    css={css(props.getStyles("option", props))}
    className={props.className}
    {...props.innerProps}
  >
    <Text color="inherit">{props.children}</Text>
  </div>
);

const MultiValue = (props: MultiValueProps) => {
  const { s } = useTheme();

  return (
    <Tag
      handleClear={props.removeProps.onClick as any}
      css={css`
        & + & {
          margin-left: ${s.sm2};
        }
      `}
    >
      {props.children as string}
    </Tag>
  );
};

const ClearIndicator = (props: ClearIndicatorProps) => {
  const variant = useVariant();

  return (
    <ButtonElement handleClick={props.clearValue}>
      <Icon id="Clear" color={variantIconColors[variant]} />
    </ButtonElement>
  );
};

const DropdownIndicator = () => {
  const variant = useVariant();
  return <Icon id="ChevronDown" color={variantIconColors[variant]} />;
};

const Select = (props: Props, ref: Ref<any>) => {
  const lod = useLightOnDark();
  const variant = props.variant ?? (lod ? "light" : "normal");
  const styles = useSelectStyles(variant, props.width);
  const { s, c } = useTheme();

  return (
    <VariantProvider value={variant}>
      <div ref={ref}>
        <ReactSelect
          styles={styles}
          theme={(theme) => ({
            ...theme,
            borderRadius: s.sm,
            colors: {
              ...theme.colors,
              primary25: c.blue100,
              primary50: c.blue100,
              primary: c.blue100,
              neutral0: c.white,
            },
          })}
          components={{
            DropdownIndicator,
            ClearIndicator,
            MultiValue,
            Option,
          }}
          isSearchable={false}
          {...props}
        />
      </div>
    </VariantProvider>
  );
};

export default forwardRef(Select);
