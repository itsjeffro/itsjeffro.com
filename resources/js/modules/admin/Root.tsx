import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/** Pages **/
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";

class Root extends React.Component<any, any> {
  render() {
    return (
      <Router basename="admin">
        <>
          <Switch>
            <Route exact path="/" component={ DashboardPage } />
            <Route path="/posts" component={ PostsPage } />
            <Route path="/users" component={ UsersPage } />
            <Route path="/settings" component={ SettingsPage } />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Root;

if (document.getElementById('root')) {
  ReactDOM.render(<Root />, document.getElementById('root'));
}
