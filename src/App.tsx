import React, { ReactElement } from 'react';
import P from '@pages';
import { Route, Switch } from 'react-router-dom';

function App(): ReactElement {
  return (
    <Switch>
      <Route exact path="/" component={P.Main} />
    </Switch>
  );
}

export default App;
