import React, { Component } from "react";
import ContactsListItem from "../contactsListItem/ContactsListItem";
import "./ContactsList.css";

export default class ContactsList extends Component {
  render() {
    const itemArr = ["id", "name", "surname", "phone"];
    return (
      <table>
        <thead>
          <tr>
            {itemArr.map((el) => (
              <th key={el}>{el}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map((item) => (
            <ContactsListItem
              key={item.id}
              item={item}
              itemArr={itemArr}
              onDelete={this.props.onDelete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}
