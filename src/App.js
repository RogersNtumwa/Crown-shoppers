import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopPage} exact />
      </Switch>
    </div>
  );
}

export default App;
