import { useCallback, useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemContext, Theme } from "./ThemContext";

interface UseThemeResult {
  theme: Theme,
  toggleTheme: () => void,
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemContext)

  const toggleTheme = useCallback( () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [theme, setTheme]);

  return {
    theme,
    toggleTheme
  }
}
