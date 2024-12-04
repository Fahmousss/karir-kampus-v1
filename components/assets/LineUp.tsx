import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#3470A2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m21 6-5.293 5.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 0-1.414 0L7 14"
    />
    <Path
      stroke="#3470A2"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 3v14.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21H21"
    />
  </Svg>
);
export { SvgComponent as LineUp };
