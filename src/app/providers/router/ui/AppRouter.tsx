import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets';

import { routeConfig } from '../config/RouterConfig';

function AppRouter() {
  return (
    <Routes>
      {
        routeConfig.map(({ path, element }) => (
          <Route
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))
      }
    </Routes>
  );
}

export default AppRouter;
