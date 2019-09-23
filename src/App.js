import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import Login from "./components/Login";
import requireAuth from "./components/requireAuth";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={requireAuth(Home)} />
      </Layout>
    );
  }
}