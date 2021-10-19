import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import FormComp from './components/flash-card-form/form.component';
import Header from './components/header/header.component';
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Switch>
        <Route exact path="/page/form" component={FormComp} />
      </Switch>
      <p>gunwoo</p>
    </div>
  );
};

export default App;
