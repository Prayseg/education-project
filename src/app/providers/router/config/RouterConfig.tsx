import React from 'react';

import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

const { MAIN, ABOUT, NOT_FOUND } = AppRoutes;

export const RoutePath: Record<AppRoutes, string> = {
  [MAIN]: '/',
  [ABOUT]: '/about',
  [NOT_FOUND]: '*',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
];
