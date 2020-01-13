import React, { Component } from "react";
import './post.css'
 import {Link} from "react-router-dom"


class PostItem extends Component {
  state = {};

  render(){
    return (
      <div className="PostItem">
         
          <h5>{this.props.post.title}</h5>  
         <p>{this.props.post.body}</p> 
         <Link to={`/user/${this.props.post.userId}/${this.props.post.id}`}><i class="far fa-comment"></i></Link>
      </div>
    );
  }
}
export default PostItem;