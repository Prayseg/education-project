import { Suspense } from "react";
import { useTranslation } from "react-i18next";

import AppRouter from "app/providers/router/ui/AppRouter";
import { classNames } from "shared/lib/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";


import './styles/index.scss';

export const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading...">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  );
};
