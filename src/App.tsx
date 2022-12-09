import { Suspense, useState } from 'react';
import { Router } from 'react-router-dom';
import Spinner from './components/Spinner';
import BaseRouter from './routes';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <BaseRouter />
    </Suspense>
  );
}

export default App;
