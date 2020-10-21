import React from 'react';
import RenPlayer from './RenPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <BrowserRouter basename="/react-videoplayer">
    <>
      <Switch>
        <Route exact path="/" component={RenPlayer} />
        <Route exact path="/:activeVideo" component={RenPlayer} />
      </Switch>
      <GlobalStyle />
    </>
  </BrowserRouter>
);

export default App;