import React, { Component } from 'react';
import './Button.scss';
class DeleteButton extends Component {
  handleDelete(){
    const id = this.props.id;
    this.props.callback(`destroy?id=${id}`);
  }
  render() {
    return (
      <a onClick={that => this.handleDelete(that)} className="delete_btn">X</a>
    );
  }
}

export default DeleteButton;
