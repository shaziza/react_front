// import initialState from './initialState';
import {
	SET_IN_DATABASE_BY_PATH,
} from '../actions/actionsTypes';
import {
	assignToPathFromObjectToValue
} from "../helpers";
import {
	USERS_KEY
} from '../actions/keys';
import {
	ActionsTypes,
} from '../types';

const databaseReducer = (state = {
	[USERS_KEY]: {}
}, action: ActionsTypes) => {
	let new_state = {...state};
    switch(action.type) {
		case SET_IN_DATABASE_BY_PATH:
			return Object.assign({}, state, assignToPathFromObjectToValue(new_state, action.path, action.data));
		default: return state;
	}
}

export default databaseReducer;
