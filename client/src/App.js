import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";


class App extends Component {
  render() {
    return (
      <div className="main">
      <Router>
      <div>
        <Nav />
        <Jumbo />
        <Switch>
          {/* <Route exact path="/" component={} />
          <Route exact path="/books" component={} />
          <Route exact path="/books/:id" component={} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
