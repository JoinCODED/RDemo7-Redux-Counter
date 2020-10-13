import { SET_POSTS } from "../actionCreators/actionTypes";
const initialState = {
  posts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case "HEBA":
      console.log("Heba in posts");
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
