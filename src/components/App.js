import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Main from './Main';


export default function App() {

  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
}
