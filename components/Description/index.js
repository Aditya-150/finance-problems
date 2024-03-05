"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import useMousePosition from "@/utils/useMousePosition";

export default function Description() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 300 : 0;
  return (
    <div className="grid place-items-center h-screen">
      <motion.div
        className={`absolute px-10 lg:px-40 md:text-justify text-center font-semibold dark:bg-purple-600 bg-purple-950 ${styles.mask} h-svh flex items-center justify-center`}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      >
        <p
          className="md:text-3xl text-2xl dark:text-purple-950 text-purple-600 leading-relaxed"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          I completely forgot to acknowledge the YouTube tutorials,
          documentation, Google searches, generative AI tools, and the countless
          trial-and-error attempts that were crucial in making this project
          possible.
        </p>
      </motion.div>
      <div className="px-10 lg:px-40 md:text-justify text-center font-semibold h-svh flex items-center justify-center">
        <p className="md:text-3xl text-2xl dark:text-purple-100 text-black leading-relaxed font-semibold">
          I crafted it with <span className={styles.highlight}>Next.js</span>{" "}
          for robust functionality,
          <span className={styles.highlight}> Tailwind CSS</span> for sleek
          styling,
          <span className={styles.highlight}> Framer Motion</span> for fluid
          animations, and leveraged my design prowess and problem-solving
          acumen, enhanced with{" "}
          <span className={styles.highlight}>Zustand</span> for state
          management.
        </p>
      </div>
    </div>
  );
}
