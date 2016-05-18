import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import Layout from './components/Layout';

ReactDOM.render((
  <Router>
    <Route path="/" component={Layout} />
  </Router>
), document.getElementById('root'));
