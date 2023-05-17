import { FC, useCallback, useMemo, useState } from "react";

import { LOCAL_STORAGE_THEME_KEY, ThemContext, Theme } from "./ThemContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme
  }), [theme])


  return (
    <ThemContext.Provider value={defaultProps}>
      {children}
    </ThemContext.Provider>
  )
}
