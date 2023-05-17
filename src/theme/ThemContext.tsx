import React, { createContext } from 'react'

export enum Theme {
  DARK= 'dark',
  LIGHT = 'light'
}

export interface ThemeContextProps {
  theme?: Theme,
  setTheme?: (theme: Theme) => void;
}

export const ThemContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';
