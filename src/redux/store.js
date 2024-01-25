import { createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import reducers from "./reducers/index";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);
export default store; 