import { lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
const HomePage = lazy(() => import('./components/pages/HomePage'));
const NanniesPage = lazy(() => import('./components/pages/NanniesPage'));
const FavoritesPage = lazy(() => import('./components/pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('./components/pages/NotFoundPage'));

function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="nannies" element={<NanniesPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
