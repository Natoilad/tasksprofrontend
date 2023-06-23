import AuthPage from 'pages/AuthPage';
import WelcomePage from 'pages/WelcomePage';
import React from 'react';
// import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// const Welcome = lazy(() => import('../pages/WelcomePage'));

// const AuthPage = lazy(() => import('../pages/AuthPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
    </Routes>
  );
};
