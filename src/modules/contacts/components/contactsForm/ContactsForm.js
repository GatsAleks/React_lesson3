import React, { Component } from "react";
import "./ContactsForm.css";

export default class ContactsForm extends Component {
  state = {
    todo: {
      name: "Name",
      surname: "Surname",
      phone: "Phone number",
    },
  };
  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSave(this.state.todo);
  };

  onInputChange = (e) => {
    this.setState({
      todo: { ...this.state.todo, [e.target.name]: e.target.value },
    });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form">
        <p>Add a new contact in your contact book</p>
        <input
          type="text"
          name="name"
          value={this.state.todo.name}
          onChange={this.onInputChange}
        />
        <input
          type="text"
          name="surname"
          value={this.state.todo.surname}
          onChange={this.onInputChange}
        />
        <input
          type="tel"
          name="phone"
          value={this.state.todo.phone}
          onChange={this.onInputChange}
        />
        <div className="form_buttons">
          <button type="button" onClick={this.onFormSubmit}>
            Save
          </button>
          <button onClick={this.props.showForm} type="button">
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
