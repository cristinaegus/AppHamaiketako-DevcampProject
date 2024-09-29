import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Rutas from './pages/rutas';
import Blog from './pages/blog';


const App = () => {
  return (
    <Router>
       <Switch>
       <Route path="/" exact component={Home} />
        <Route path="/rutas" component={Rutas} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  
  );
};

export default App;

