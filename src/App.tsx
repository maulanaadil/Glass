import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Spinner from './components/Spinner';
import BaseRoute from './routes';
import './app.css';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <BaseRoute />
      </Router>
    </Suspense>
  );
}

export default App;
