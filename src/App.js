import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";
import { Route, Switch } from "react-router-dom";

const HatPage = () => {
  return (
    <div>
      <h1>Hat Page </h1>{" "}
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/hats" component={HatPage} exact />
      </Switch>
    </div>
  );
}

export default App;
