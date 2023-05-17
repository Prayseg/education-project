import React, { Suspense, useCallback, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import { MainPageLazy } from "./pages/MainPage";
import { AboutPageLazy } from "./pages/AboutPage";
import { useTheme } from "./theme/useTheme";

import './styles/index.scss'
import { classNames } from "./helpers/classNames";

export const App = () => {
  const { theme, toggleTheme } = useTheme()


  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
