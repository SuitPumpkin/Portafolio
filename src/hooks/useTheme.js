import { useCallback, useState } from "react";

const STORAGE_KEY = "suit-theme";

function readInitialTheme() {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export default function useTheme() {
  const [theme, setTheme] = useState(readInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private mode: the switch still works for this session.
      }
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
