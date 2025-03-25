import { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
const HomePage = lazy(() => import('./pages/HomePage'));
const NanniesPage = lazy(() => import('./pages/NanniesPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nannies" element={<NanniesPage />} />
          <Route
            path="favorites"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
