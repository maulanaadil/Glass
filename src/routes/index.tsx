import React from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Analytics from '../pages/analytics';
import SigIn from '../pages/auth/signin';
import Settings from '../pages/settings';
import Work from '../pages/work';

const Home = React.lazy(() => import('../pages/home'));

export const BaseRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/analytics"
        element={
          <Layout>
            <Analytics />
          </Layout>
        }
      />
      <Route
        path="/work"
        element={
          <Layout>
            <Work />
          </Layout>
        }
      />
      <Route
        path="/settings"
        element={
          <Layout>
            <Settings />
          </Layout>
        }
      />
      <Route path="/auth/signin" element={<SigIn />} />
    </Routes>
  );
};

const PrivateRoute = ({ authUser, children }: { authUser?: string; children: React.ReactNode }) => {
  return authUser ? children : <Navigate to="/signin" />;
};

export default BaseRoute;
