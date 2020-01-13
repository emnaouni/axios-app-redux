import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllComments } from "../../actions/usersActions";
import CommentItem from './CommentItem';
import './comment.css'

class PostList extends Component {
  state = {};
  componentDidMount() {
    this.props.getAllComments();
  }

  render() {
      const CommentFiltred= this.props.allComments.comments.filter(el=> el.postId==this.props.match.params.id);
    return (
      <div className="PostList">
        {CommentFiltred.map(comment => (
          <CommentItem comment={comment} />
        ))}
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    allComments: state.Reducer
  };
};


export default connect(
  mapStateToProps,
  {getAllComments}
)(PostList);