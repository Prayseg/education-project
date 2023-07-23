import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/RouterConfig';

function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
