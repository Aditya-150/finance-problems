"use client";
import React, { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useViewStore } from "@/store/view.store";

export const FeaturesDescription = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 60%" });
  const setInViewFeature = useViewStore((state) => state.setInViewFeature);

  console.log(
    "isInView:",
    isInView,
    "id:",
    id,
    "setInViewFeature:",
    setInViewFeature
  );

  useEffect(() => {
    if (isInView && typeof setInViewFeature === "function") {
      setInViewFeature(id);
    }
  }, [isInView, id, setInViewFeature]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};
