import React from "react";
import Silk from "../components/reactBits/Silk";
import BlurText from "../components/reactBits/BlurText";
import FadeContent from "../components/reactBits/FadeContent";
import { Link } from "react-router";

export function LandingPage() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-screen fixed z-0">
        <FadeContent blur={true} delay={3000} duration={1000} easing="ease-out" initialOpacity={0}>
          <div className="w-full h-screen overflow-hidden">
            <Silk speed={2.3} scale={1.1} color="#463582" noiseIntensity={4} rotation={0} />
          </div>
        </FadeContent>
      </div>
      <div className="w-full h-screen fixed flex flex-col items-center justify-center z-90">
        <BlurText
          text="MONMAT"
          delay={300}
          animateBy="letters"
          direction="top"
          onAnimationComplete={console.log("Inicio")}
          className="text-5xl md:text-7xl font-serif font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        />
        <FadeContent blur={true} delay={2000} duration={1000} easing="ease-out" initialOpacity={0}>
          <p className="text-gray-300 font-serif text-xl md:text-2xl">Artesanias y Manias</p>
        </FadeContent>
        <div className="h-30 md:h-0"></div>
      </div>
      <div className="w-full flex items-center justify-center mt-30 fixed bottom-5 z-200">
        <FadeContent blur={true} delay={4000} duration={1000} easing="ease-out" initialOpacity={0}>
          <Link to="/home">
          <div className="px-4 py-1 text-xl font-serif border border-[#463582] rounded-lg text-indigo-200 bg-[#463582]/30 transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(70,50,130,1.5)] hover:border-white/50">
            Comenzar
          </div>
          </Link>
        </FadeContent>
      </div>
    </div>
  );
}
