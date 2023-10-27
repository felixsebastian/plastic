import { SpecimenProvider } from "@specimen/foundation";
import { ReactNode } from "react";
import Basics from "./css/Basics";
import ButtonReset from "./css/ButtonReset";
import Inter from "./css/Inter";
import TiemposHeadline from "./css/TiemposHeadline";
import theme from "./theme";

interface Props {
  children?: ReactNode;
  navigationFn?: (path: string) => void
}

const GlobalCss = () => (
  <>
    <Basics />
    <TiemposHeadline />
    <Inter />
    <ButtonReset />
  </>
);

const PlasticProvider = (props: Props) => (
  <SpecimenProvider theme={theme} navigationFn={props.navigationFn}>
    <GlobalCss />
    {props.children}
  </SpecimenProvider>
);

export default PlasticProvider;
