import { useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

import ThemeLight from 'shared/assets/icons/theme-light.svg';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher(props: ThemeSwitcherProps) {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button theme="clear" className={className} onClick={toggleTheme}>
      {
        theme === Theme.LIGHT ? <ThemeDark /> : <ThemeLight />
      }
    </Button>
  );
}
