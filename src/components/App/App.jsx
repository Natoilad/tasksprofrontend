import React from 'react';
// import Board from 'components/Board/Board';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthPage from 'pages/AuthPage';
import WelcomePage from 'pages/WelcomePage';
import HomePage from 'pages/Home';

import { PublicRoute } from 'components/Routs/PublicRoute';
import { PrivateRoute } from 'components/Routs/PrivateRoute';
import { useAuth } from 'hooks/authHooks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authRefresh } from 'redux/auth/auth-operations';
import { LoaderHomePage } from 'components/Loader/LoaderHomePage/Loader';

// const Welcome = lazy(() => import('../pages/WelcomePage'));

// const AuthPage = lazy(() => import('../pages/AuthPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderHomePage />
  ) : (
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
          <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
        }
      />
    </Routes>
  );
};
