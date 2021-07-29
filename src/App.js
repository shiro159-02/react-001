import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Users } from './Pages/Users';


function App() {
  return (
    <Router>
      <NaviBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/about" component={About} />
      </Switch>
          <Footer />
    </Router>

  );
}

export default App;
