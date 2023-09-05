import { Suspense, useEffect } from 'react';

import AppRouter from 'app/providers/router/ui/AppRouter';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar, Sidebar } from 'widgets';

import './styles/index.scss';

export function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() < 0.5) {
      throw new Error();
    }
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
