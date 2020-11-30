
import { requestAction } from './actions/actions';
import { RESPONSE_FAIL } from './actions/actionsTypes';
import { request } from "./actions/request";

export const API_CALL = 'API_CALL';

/* eslint-disable */
/* eslint-enable */
// const handleError = ( errorCode ) => {
// 	switch( errorCode ) {
// 	  case 404:
//       this.props.history.push( '/404' );
//       break;
// 	  default:
//       break;
// 	}
// }

export default store => next => action => {
	let api_call = action[API_CALL];
	if (typeof api_call === 'undefined') {
		return next(action);
	}

	let {
		url,
		method,
		params,
		key,
		action_type,
		main,
	} = api_call;

  method = method.toUpperCase();

 
  switch( method ) {
      case 'GET':
      case 'POST':
          break;
      default:
          next( action );
  }
	store.dispatch( requestAction( key ) );
  return request(url, method, params).then(json => {
		if (json.error !== 0) {
			// handleError( json.error, store.dispatch );
			throw new Error(JSON.stringify(json));
		}

		let data = json.response.items;
		
		return data;
	}).then(json => next({
		type: action_type,
		response: json,
		key,
	}), error => {
		let message = JSON.parse(error.message);
		return next({
			type: RESPONSE_FAIL,
			main: main || false,
			error: message.error_text,
			error_status: message.error,
			key,
		});
	})
}
