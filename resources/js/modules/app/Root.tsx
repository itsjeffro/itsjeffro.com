import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

class Root extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/:postSlug" component={ HomePage } />
          </Switch>
        </>
      </Router>
    );
  }
}

export default Root;

if (document.getElementById('app')) {
  ReactDOM.render(<Root />, document.getElementById('app'));
}
