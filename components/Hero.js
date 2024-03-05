"use client";
import React from "react";
import { motion } from "framer-motion";
import { useThemeStore } from "@/store/theme.store";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 1,
    },
  },
};

export default function Hero() {
  const theme = useThemeStore((state) => state.theme); 
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        className="flex justify-center text-center flex-col gap-2"
        initial="hidden"
        animate="show"
        variants={fadeInUpAnimation}
      >
        <motion.p
          className="dark:text-purple-300 text-purple-700 tracking-widest md:text-lg text-base font-regular"
          variants={fadeInUpAnimation}
        >
          {theme === "dark" ? "IDENTIFIED PROBLEMS" : "POSSIBLE SOLUTIONS"}
        </motion.p>
        <motion.h1
          className=" bg-gradient-to-r dark:from-purple-50 from-60% dark:to-gray-400 from-gray-800 to-purple-100 inline-block text-transparent bg-clip-text text-2xl font-extrabold sm:text-4xl md:leading-tight md:text-6xl"
          variants={fadeInUpAnimation}
        >
          {theme === "dark" ? (
            <>
              Identifying Challenges,
              <br /> Crafting Solutions: Navigating Today&apos;s
              <br />
              Financial Landscape
            </>
          ) : (
            <>
              Empowering Financial
              <br /> Independence: Strategies to Thrive
              <br /> in the Modern Economy
            </>
          )}
        </motion.h1>
        <motion.p
          className="dark:text-purple-100 text-gray-700 md:text-lg text-base"
          variants={fadeInUpAnimation}
        >
          Top 3 Personal Finance Problems in 21st-Century
        </motion.p>
      </motion.div>
    </div>
  );
}
