import { SET_POSTS } from "./actionTypes";
import axios from "axios";

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = response.data;
      dispatch({
        type: SET_POSTS,
        payload: posts
      });
    } catch (err) {
      console.error("Something went wrong ", err);
    }
  };
};
