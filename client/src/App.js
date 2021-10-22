import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import NavBar from './components/navbar/navbar.coponent';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
