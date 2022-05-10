import React, { Component } from "react";

const greeting = "Hello Kier";
const loggedIn = true;

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>{loggedIn ? greeting : "Not logged In"}</h1>
      </div>
    );
  }
}
