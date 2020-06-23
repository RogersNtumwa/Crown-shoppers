import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopPage} exact />
        <Route path="/signIn" component={SignInAndSignUpPage} exact />
      </Switch>
    </div>
  );
}

export default App;
