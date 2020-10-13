import { INCREMENT } from "../actionCreators/actionTypes";
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case "HEBA":
      console.log("Heba in counter");
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
