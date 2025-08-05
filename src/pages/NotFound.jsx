import React from "react";
import FuzzyText from "../components/reactBits/FuzzyText";
import Noise from "../components/reactBits/Noise";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-3 md:gap-5 items-center justify-center dark:bg-slate-900 bg-slate-200">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        color={"#8497AB"}
        fontFamily={"inherit"}
        fontSize={"clamp(2rem, 6vw, 6rem)"}>
        404
      </FuzzyText>
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        color={"#8497AB"}
        fontFamily={"inherit"}
        fontSize={"clamp(1rem, 2vw, 2rem)"}>
        Not Found
      </FuzzyText>
      <div className="w-full h-screen absolute">
        <Noise
          patternSize={350}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={3}
          patternAlpha={10}
        />
      </div>
    </div>
  );
}
