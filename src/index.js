import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import DashBoard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";
import store from "./redux/store";

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Redirect from="/" exact to="/login" />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={DashBoard} />
        <Route component={NotFound} />
        <Redirect />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
