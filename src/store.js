import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { createLogger } from "redux-logger";
import reducers from './reducers/root.reducer';
import createHistory from 'history/createBrowserHistory';
import DevTools from "./dev-tools";

const history = createHistory();
const middleware = routerMiddleware(history);


const reducersWithRouterInfo = combineReducers({
  ...reducers,
  router: routerReducer
});

const creatStoreWithMiddleware = compose(
  applyMiddleware(middleware),
  DevTools.instrument()
)(createStore)

export default creatStoreWithMiddleware(reducersWithRouterInfo, {})
