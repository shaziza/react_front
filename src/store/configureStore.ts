import { 
  createStore,
  compose, 
  applyMiddleware 
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer from '../reducers/app';
import promise from 'redux-promise-middleware';

export default function configureStore() {  
  let preloadedState =  {};
	if ((window as any).__STATE__) {
		preloadedState = (window as any).__STATE__;
		delete (window as any).__STATE__;
	}
	// Подключение Redux Dev Tools
	const composeEnhancers = typeof window === 'object' &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
	}) : compose;
	const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware,promise));
	let store = createStore(
		mainReducer,
		preloadedState,
		enhancer
  	);
	return store;
}