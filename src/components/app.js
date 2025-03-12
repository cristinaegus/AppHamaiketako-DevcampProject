import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navigation/navbar';
import Home from './pages/home';
import Rutas from './pages/rutas';
import Blog from './pages/blog';
import Footer from './navigation/footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="page-content" role="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rutas" component={Rutas} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </main>
        
      </div>
    </Router>
  );
};

export default App;
