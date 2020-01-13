import { GET_USERS,GET_POSTS ,GET_COMMENTS} from "./types";
import axios from "axios";



export const getAllUsers = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => 
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    );
};
export const getAllPosts = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => 
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    );
};
export const getAllComments = () => dispatch => {
  return axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(res => 
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    );
};