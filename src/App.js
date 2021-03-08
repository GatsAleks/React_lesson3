import React, { Component } from "react";
import "./App.css";
import Contacts from "./modules/contacts/components/contacts/Contacts.js";

export default class App extends Component {
  render() {
    return (
      <>
        <Contacts />
      </>
    );
  }
}
