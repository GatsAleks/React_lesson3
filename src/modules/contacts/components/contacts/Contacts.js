import React, { Component } from "react";
import "./Contacts.css";
import ContactsForm from "../contactsForm/ContactsForm";
import ContactsList from "../contactsList/ContactsList";
import {
  getContacts,
  deleteContact,
  createNewContact,
} from "../../services/contactsServices";

export default class Contacts extends Component {
  state = {
    list: [],
    isShowForm: false,
  };

  componentDidMount() {
    getContacts().then((list) => this.setState({ list }));
  }

  deleteContact = (id) => {
    deleteContact(id);
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
  };

  showForm = () => {
    this.setState({ ...this.state, isShowForm: !this.state.isShowForm });
  };

  createContact = (newContactItem) => {
    createNewContact(newContactItem).then((data) => {
      this.setState({ list: [...this.state.list, data] });
    });
    this.showForm();
  };

  render() {
    return (
      <div className="container">
        <h1>Contacts book</h1>
        <ContactsList
          list={this.state.list}
          onDelete={this.deleteContact}
          editContact={this.editContact}
        />
        <div className="form_container">
          <button onClick={this.showForm}>
            {this.state.isShowForm ? "Hide form" : "Edit contacts"}
          </button>
          {this.state.isShowForm ? (
            <ContactsForm
              showForm={this.showForm}
              onSave={this.createContact}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
