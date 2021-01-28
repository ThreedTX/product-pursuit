//Redux Imports
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

//Middleware Imports
import thunk from "redux-thunk";

//Reducers
import sessionReducer from './session';
import productReducer from './product';

//Combines into one reducer
const rootReducer = combineReducers({
  session: sessionReducer,
  product: productReducer,
});

let enhancer;
//Only "production" needs thunk
if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  //We need devtools and logger
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
