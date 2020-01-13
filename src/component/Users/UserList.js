import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/usersActions";
import UserItem from './UserItem'
import './user.css';
import {Pic }from '../../UsersPics'

class UsersList extends Component {
  state = {};
  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    return (
      <div className="Userlist">
        {this.props.data.users.map((user ,index)=> (
          <UserItem  user={user} img={Pic[index]}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.Reducer
  };
};


export default connect(
  mapStateToProps,
  {getAllUsers}
)(UsersList);