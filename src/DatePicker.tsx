import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import GenericDropDown from "./GenericDropDown";
import Button from "./Button";
import { css, Global } from "@emotion/react";
import { useTheme } from "@specimen/foundation";

const DatePicker: ForwardRefRenderFunction<HTMLElement> = (_, ref: any) => {
  const [selected, setSelected] = useState<DateRange | undefined>();
  const { s, c } = useTheme();
  const from = selected?.from;

  return (
    <>
      <Global
        styles={css`
          :root {
            --rdp-cell-size: ${s.xl};
            --rdp-accent-color: ${c.blue500};
            --rdp-background-color: ${c.white};
            --rdp-accent-color-dark: ${c.blue500};
            --rdp-background-color-dark: ${c.white};
            --rdp-outline: ${s.xxs} solid ${c.outline};
            --rdp-outline-selected: ${s.xxs} solid ${c.blue300};
          }

          .rdp-root {
            color: ${c.purple800};
          }
        `}
      />
      <GenericDropDown
        triggerComponent={Button}
        triggerRef={ref}
        content={(close: () => void) => (
          <DayPicker
            className="rdp-root"
            mode="single"
            selected={selected}
            onSelect={(v?: DateRange) => {
              setSelected(v);
              close();
            }}
          />
        )}
        triggerProps={{
          icon: "DateEnd",
          iconPosition: "left",
          children: from ? format(from, "PP") : "Choose a date",
        }}
      />
    </>
  );
};

export default forwardRef(DatePicker);
