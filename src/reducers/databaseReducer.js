// import initialState from './initialState';
import {
	APPEND_IN_DATABASE_BY_PATH
} from '../actions/actionsTypes';
import {
	appendToPathFromObjectToValue
} from "../helpers";
import {
	USERS_KEY,
} from '../actions/keys';

const databaseReducer = (state={
	[USERS_KEY]: {}
}, action) => {
	let new_state = {...state};
	console.log(action);
    switch(action.type) {
			case APPEND_IN_DATABASE_BY_PATH:
			return Object.assign({}, state, appendToPathFromObjectToValue(new_state, action.path, action.data, action.options));
		default: return state;
	}
}

export default databaseReducer;
