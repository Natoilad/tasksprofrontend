import React, { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Board from 'components/Board/Board';
import AuthPage from 'pages/AuthPage';
import WelcomePage from 'pages/WelcomePage';
import { PublicRoute } from 'components/Routs/PublicRoute';
import { PrivateRoute } from 'components/Routs/PrivateRoute';

// const Welcome = lazy(() => import('../pages/WelcomePage'));

// const AuthPage = lazy(() => import('../pages/AuthPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route
        path="/auth/:id"
        element={<PublicRoute redirectTo="/home" component={<AuthPage />} />}
      />

      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/auth/login" component={<Board />} />
        }
      />
    </Routes>
  );
};

/* <Route path="/">
        {isLoggedIn ? <Redirect to="/home" /> : element={<AuthPage />}}
      </Route> */
