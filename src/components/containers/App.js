import React from 'react';
import RenPlayer from './RenPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={RenPlayer} />
      <Route exact path="/:activeVideo" component={RenPlayer} />
    </Switch>
  </BrowserRouter>
);

export default App;