import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Main from './Main';
import BurgerMenu from '../containers/BurgerMenu';


export default function App() {

  return (
    <Router>
      <BurgerMenu />
      <Route exact path="/" component={Main} />
    </Router>
  );
}
