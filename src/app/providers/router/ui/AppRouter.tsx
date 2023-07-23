import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { routeConfig } from '../config/RouterConfig';

function AppRouter() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<div>{`${t('Загрузка')}...`}</div>}>
      <Routes>
        {
          routeConfig.map(({ path, element }) => (
            <Route
              path={path}
              element={(
                <div className="page-wrapper">
                  {element}
                </div>
          )}
            />
          ))
        }
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
