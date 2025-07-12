import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './navigation/navbar';
import Home from './pages/home';
import Rutas from './pages/rutas';
import Blog from './pages/blog';
import Footer from './navigation/footer';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main className="page-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rutas" element={<Rutas />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
