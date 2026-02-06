"use client";

import { useEffect } from "react";
import { useUIStore } from "@/stores/use-ui-store";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (theme === "system") {
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      root.classList.add(systemTheme);

      const handleSystemThemeChange = (event: MediaQueryListEvent) => {
        root.classList.remove("light", "dark");
        root.classList.add(event.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);
      return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      };
    }

    root.classList.add(theme);
  }, [theme]);

  return children;
}
