import databaseReducer from './databaseReducer'

export default ( state = {}, action ) => {
	return {
		database: databaseReducer(state.database, action),
	};
}
