import { LightOnDarkProvider } from ".";
import WithChildren from "./WithChildren";

const LightOnDark = (props: WithChildren) => (
  <LightOnDarkProvider value={true}>{props.children}</LightOnDarkProvider>
);

export default LightOnDark;
