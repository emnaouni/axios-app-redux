import React, { Component } from "react";
 import './user.css';
 import {Link} from "react-router-dom"


class UserItem extends Component {
  state = {};

  render(){
    return (
      <div className="UserItem">
          <img src={this.props.img}/>
          <h6>{this.props.user.name}</h6>  
          <a href={this.props.user.website} >{this.props.user.website}</a>
          <p className="campany-infos">Company infos</p>
          <h6>{this.props.user.company.name}</h6> 
          <h6>{this.props.user.company.catchPhrase} </h6>
          <h6>{this.props.user.company.bs}</h6> 
          <button><Link to={`/user/${this.props.user.id}`}>Posts</Link></button>
           
      </div>
    );
  }
}
export default UserItem;