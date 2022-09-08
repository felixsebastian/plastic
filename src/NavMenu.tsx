import GenericDropDown from "./GenericDropDown";
import NavButton from "./NavButton";

const NavMenu = ({ children, label, ...props }: any) => (
  <GenericDropDown
    triggerComponent={NavButton}
    content={children}
    {...props}
    popoverProps={{ p: undefined }}
    triggerProps={{
      children: label,
    }}
  />
);

export default NavMenu;
