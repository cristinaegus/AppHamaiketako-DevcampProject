import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './navigation/navbar';
import Footer from './navigation/footer';

// Lazy loading de las páginas principales
const Home = React.lazy(() => import('./pages/home'));
const Rutas = React.lazy(() => import('./pages/rutas'));
const Blog = React.lazy(() => import('./pages/blog'));

// Componente de loading
const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '400px' }}>
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Cargando...</span>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="page-content" role="main">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rutas" element={<Rutas />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
