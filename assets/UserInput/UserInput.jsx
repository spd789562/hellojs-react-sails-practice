import React, { Component } from 'react';
import './UserInputStyle.scss';
class UserInput extends Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd(e){
    //path
    e.preventDefault();
    const input = this.refs.username;
    const newUser = input.value;
    this.props.callback(`create?name=${newUser}`);
    input.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleAdd}>
        <label htmlFor='user'>User</label>
        <input type="text" ref="username"/>
      </form>
    );
  }
}

export default UserInput;
