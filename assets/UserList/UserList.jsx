import React, { Component } from 'react';
import './UserListStyle.scss';
import UserItem from '../UserItem/UserItem';
class UserList extends Component {
  render() {
    return (
      <div>
        <ul className="list">
          {this.props.listdate.map((item,index) => {
            return <UserItem date={item.name} key={index} id={item.id} callback={this.props.callback}/>
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;
