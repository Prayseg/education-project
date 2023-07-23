import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import AppRouter from 'app/providers/router/ui/AppRouter';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

export function App() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={`${t('Загрузка')}...`}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}
