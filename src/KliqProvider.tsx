import { SpecimenProvider } from "@specimen/foundation";
import { ReactNode } from "react";
import Basics from "./css/Basics";
import ButtonReset from "./css/ButtonReset";
import Inter from "./css/Inter";
import TiemposHeadline from "./css/TiemposHeadline";
import theme from "./theme";

interface Props {
  children?: ReactNode;
}

const GlobalCss = () => (
  <>
    <Basics />
    <TiemposHeadline />
    <Inter />
    <ButtonReset />
  </>
);

const KliqProvider = (props: Props) => (
  <SpecimenProvider theme={theme}>
    <GlobalCss />
    {props.children}
  </SpecimenProvider>
);

export default KliqProvider;
