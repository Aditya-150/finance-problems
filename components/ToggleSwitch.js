"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/theme.store";

export default function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const theme = useThemeStore();
  const setTheme = useThemeStore((state) => state.setTheme);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn === true) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className="fixed left-0 right-0 bottom-[10%] z-40 flex justify-center select-none"
      onClick={toggleSwitch}
    >
      <div
        className={`bg-gray-600 backdrop-blur-md bg-opacity-80 p-1 flex items-center ${
          isOn ? "justify-end" : "justify-start"
        } w-48 h-12 rounded-full cursor-pointer`}
      >
        <span className="absolute left-0 w-24 flex place-content-center z-50 text-base cursor-pointer text-purple-50">
          Problems
        </span>
        <span className="absolute right-0 w-24 flex place-content-center z-50 text-base cursor-pointer text-purple-50">
          Solutions
        </span>
        <motion.div
          className="rounded-full w-[5.5rem] h-10 bg-purple-600"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
