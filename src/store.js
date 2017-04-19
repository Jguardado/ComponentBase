import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createLogger } from "redux-logger";
import reducers from './reducers/root.reducer';
import DevTools from "./dev-tools";

const creatStoreWithMiddleware = compose(
  DevTools.instrument()
)(createStore)

export default creatStoreWithMiddleware(reducers, {})
