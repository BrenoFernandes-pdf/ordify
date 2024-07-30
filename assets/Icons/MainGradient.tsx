import React from "react";
import { Svg, Defs, LinearGradient, Stop, Circle } from "react-native-svg";

const SvgComponent = () => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 450 450" fill="none">
      <Circle cx="200" cy="100" r="450" fill="url(#main_gradient)" />

      <Defs>
        <LinearGradient id="main_gradient" x1="0%" y1="0%" x2="80%" y2="70%">
          <Stop offset="0%" stopColor="#4C1D95" />
          <Stop offset="60%" stopColor="#321362" />
          <Stop offset="100%" stopColor="#18092F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
