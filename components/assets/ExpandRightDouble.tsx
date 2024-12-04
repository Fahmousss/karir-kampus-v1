import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ExpandRightDouble({ props }: any) {
  return (
    <Svg
      width={43}
      height={43}
      viewBox="0 0 43 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.5 32.25L32.25 21.5 21.5 10.75"
        stroke="#3470A2"
        strokeWidth={2}
      />
      <Path
        d="M10.75 32.25L21.5 21.5 10.75 10.75"
        stroke="#FFC727"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default ExpandRightDouble;
