import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import FormComp from './components/flash-card-form/form.component';
import Header from './components/header/header.component';
import DeckGrid from './components/deck-grid/deck-grid.component';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <DeckGrid />
      </div>
      {/* <Switch>
        <Route exact path="/page/form" component={FormComp} />
      </Switch> */}
    </div>
  );
};

export default App;
