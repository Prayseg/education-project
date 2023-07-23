import React from 'react';

import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

const { MAIN, ABOUT } = AppRoutes;

export const RoutePath: Record<AppRoutes, string> = {
  [MAIN]: '/',
  [ABOUT]: '/about',
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
];
