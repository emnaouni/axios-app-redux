import React, { Component } from "react";
import './comment.css'



class CommentItem extends Component {
  state = {};

  render(){
    return (
      <div className="CommentItem">
          
          <h5>{this.props.comment.name}:</h5>
          <h6>comment:</h6>{this.props.comment.body}
          </div>
    );
  }
}
export default CommentItem;