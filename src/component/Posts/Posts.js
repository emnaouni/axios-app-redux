import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPosts } from "../../actions/usersActions";
import PostItem from './PostItem';
import './post.css'

class PostList extends Component {
  state = {};
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
      const PostFiltred= this.props.allPosts.posts.filter(el=> el.userId==this.props.match.params.id);
    return (
      <div className="PostList">
        {PostFiltred.map(post => (
          <PostItem post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allPosts: state.Reducer
  };
};


export default connect(
  mapStateToProps,
  {getAllPosts}
)(PostList);