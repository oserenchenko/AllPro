import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Gallery from "./pages/Gallery";


class App extends Component {
  render() {
    return (
      <div className="main">
      <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Jumbo} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
