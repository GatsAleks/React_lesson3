import React, { Component } from "react";
import "./ContactsListItem.css";

export default class ContactsListItem extends Component {
  onDeleteItem = (e) => {
    this.props.onDelete(this.props.item.id);
  };

  

  render() {
    const { item } = this.props;
    return (
      <tr>
        {this.props.itemArr.map((el) => (
          <td key={el}>{item[el]}</td>
        ))}
        <td>
          <button onClick={this.onDeleteItem}>delete</button>
        </td>
  
      </tr>
    );
  }
}
