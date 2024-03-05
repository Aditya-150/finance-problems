"use client";
import { useEffect } from "react";
import { useThemeStore } from "@/store/theme.store";

export default function ThemeHandler() {
  const theme = useThemeStore((state) => state.theme);
  useEffect(() => {
    try {
      const localTheme = JSON.parse(localStorage.getItem("theme"));
      if (localTheme) {
        document.documentElement.setAttribute(
          "data-mode",
          localTheme.state.theme
        );
        document.documentElement.className = localTheme.state.theme;
      }
    } catch (err) {
      console.log("error loading the color theme");
    }
  }, [theme]);

  return null;
}
