import React, { Component } from 'react';
import './UserItemStyle.scss';
import DeleteButton from '../DeleteButton/DeleteButton';
class UserItem extends Component {
  render() {
    return (
      <li key={this.props.id} className="listItem">
        <span>{this.props.date}</span>
        <DeleteButton callback={this.props.callback} id={this.props.id}/>
      </li>
    );
  }
}

export default UserItem;
