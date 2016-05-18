import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import About from './components/About';

ReactDOM.render((
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={About} />
    </Route>
  </Router>
), document.getElementById('root'));
