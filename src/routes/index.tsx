import React from 'react';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';

const Home = React.lazy(() => import('../pages/home'));

const BaseRoutes = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  );
};

const PrivateRoute = ({ authUser, children }: { authUser?: string; children: React.ReactNode }) => {
  return authUser ? children : <Navigate to="/signin" />;
};

export default BaseRoutes;
