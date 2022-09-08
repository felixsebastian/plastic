import { useContext } from "react";
import lightOnDarkContext from "./lightOnDarkContext";

const useLightOnDark = () => useContext(lightOnDarkContext);

export default useLightOnDark;
