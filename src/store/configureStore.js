import { 
  createStore,
  // combineReducers, 
  compose, 
  applyMiddleware 
} from 'redux'
import thunkMiddleware from 'redux-thunk'
// import rootReducer from '../reducers/';  
import mainReducer from '../reducers/app';
// import Api from '../api';  
import promise from 'redux-promise-middleware';
/*Create a function called configureStore */

export default function configureStore() {  
  // const reducer = combineReducers(rootReducer)
  // return createStore(reducer, applyMiddleware(thunk));
  
  let preloadedState =  {};
	if (window.__STATE__) {
		preloadedState = window.__STATE__;
		delete window.__STATE__;
	}
	// Подключение Redux Dev Tools
	const composeEnhancers = typeof window === 'object' &&
	  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
			
		}) : compose;
	const enhancer = composeEnhancers(applyMiddleware(
		thunkMiddleware,
    promise
	));
	let store = createStore(
		mainReducer,
		preloadedState,
		enhancer
  );
  return store;
}