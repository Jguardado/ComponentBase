import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';


export default createStore(reducers, {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);
