import * as React from 'react';
import { Route, Router, browserHistory  } from 'react-router';
import * as ReactDOM from 'react-dom';
import Login from "fabalous-login/view/Login";


var routeMap = (
  <Route path="/" component={Login} >
    <Route path="dashboard"  />
  </Route>
);

export function rend () {
  ReactDOM.render(<Router>{routeMap}</Router>, document.getElementById('container'));
}
