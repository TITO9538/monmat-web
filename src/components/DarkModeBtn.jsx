import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "../context/DarkModeContext";
import FadeContent from "./reactBits/FadeContent";

export default function DarkModeButton() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <FadeContent
      className="fixed bottom-0 right-0 z-1000"
      blur={true}
      duration={1000}
      easing="ease-out"
      initialOpacity={0}>
      <button
        onClick={toggleDarkMode}
        className="p-5 text-2xl hover:scale-110 transition-all duration-500 cursor-pointer">
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
      </button>
    </FadeContent>
  );
}
