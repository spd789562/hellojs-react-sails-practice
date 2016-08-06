import React, { Component, PropTypes } from 'react';
import './User.scss';
import UserList from '../UserList/UserList';
import UserInput from '../UserInput/UserInput';
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(path='') {
    console.log(`user/${path}`);
    $.ajax({
      url:`user/${path}`,
      success: (date) => {
        this.setState({ userList: date })
      },
      error: (e) => {
        console.log(e);
      }
    })
  }
  componentWillMount() {
    this.handleChange();
  }
  render() {
    return (
      <div>
        <h1>User Page</h1>
        <UserList listdate={this.state.userList} callback={this.handleChange}/>
        <UserInput callback={this.handleChange}/>
      </div>
    );
  }
}

export default UserPage;
