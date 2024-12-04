import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg width={30} height={28} fill="none">
    <Rect
      width={22.5}
      height={17.5}
      x={3.75}
      y={7}
      stroke="#3470A2"
      strokeWidth={2}
      rx={2}
    />
    <Path
      fill="#3470A2"
      d="M3.75 11c0-1.886 0-2.828.586-3.414C4.922 7 5.864 7 7.75 7h14.5c1.886 0 2.828 0 3.414.586.586.586.586 1.528.586 3.414v.667H3.75V11Z"
    />
    <Path
      stroke="#3470A2"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.75 3.5V7M21.25 3.5V7"
    />
    <Rect width={5} height={2.333} x={8.75} y={14} fill="#3470A2" rx={0.5} />
    <Rect
      width={5}
      height={2.333}
      x={8.75}
      y={18.667}
      fill="#3470A2"
      rx={0.5}
    />
    <Rect width={5} height={2.333} x={16.25} y={14} fill="#3470A2" rx={0.5} />
    <Rect
      width={5}
      height={2.333}
      x={16.25}
      y={18.667}
      fill="#3470A2"
      rx={0.5}
    />
  </Svg>
);
export { SvgComponent as Calendar };
