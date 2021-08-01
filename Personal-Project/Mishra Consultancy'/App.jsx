import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
};

export default App;
