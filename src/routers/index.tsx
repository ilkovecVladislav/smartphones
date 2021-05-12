import { FC } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import SmartPhonesPage from 'pages/SmartPhonesPage';

const AppRouters: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={SmartPhonesPage} exact />
      <Redirect
        to={{
          pathname: '/',
          state: { preventLastLocation: true },
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default AppRouters;
