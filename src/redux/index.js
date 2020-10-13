import { createStore, combineReducers, applyMiddleware } from "redux";
import { compose } from "redux";

import thunk from "redux-thunk";

import counterReducer from "./reducers/counter";
import postsReducer from "./reducers/posts";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counterState: counterReducer,
  postsState: postsReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
