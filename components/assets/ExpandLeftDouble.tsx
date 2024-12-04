import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg width={23} height={23} fill="none">
    <Path
      stroke="#3470A2"
      strokeWidth={2}
      d="M11.5 17.25 5.75 11.5l5.75-5.75M17.25 17.25 11.5 11.5l5.75-5.75"
    />
  </Svg>
);
export { SvgComponent as ExpandLeftDouble };
