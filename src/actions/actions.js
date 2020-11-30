import {
    ADD_TO_DATABASE,
    UPDATE_LIST_IN_DATABASE,
    PREPAND_LIST_TO_DATABASE,
    MERGE_ENTITIES_IN_DATABASE,
    SET_IN_DATABASE_BY_PATH,
    APPEND_IN_DATABASE_BY_PATH,
    PREPEND_IN_DATABASE_BY_PATH,
    REMOVE_IN_DATABASE_BY_PATH,
    MAKE_INDEX_IN_DATABASE_BY_PATH,
    REQUEST_DATA
} from './actionsTypes';
import {
	USERS_KEY,
	// KEYS_LIST_KEY
} from './keys';
// import { request } from "./request";
/***DATABASE***/
export const setFieldInDatabase = (entity, field, data) => {
	return {
		type: ADD_TO_DATABASE,
		entity,
		field,
		data,
	};
}
export const appendToListInDatabase = (entity, field, data) => {
	return {
		type: UPDATE_LIST_IN_DATABASE,
		entity,
		field,
		data
	};
}
export const prependToListInDatabase = (entity, field, data) => {
	return {
		type: PREPAND_LIST_TO_DATABASE,
		entity,
		field,
		data
	};
}

export function mergeEntitiesInDB(entities) {
	return {
		type: MERGE_ENTITIES_IN_DATABASE,
		entities
	};
}
/**
 * Устанавливает значение поля в database
 * @param {Any} data Данные для вставки
 * @param {String} path Путь для вставки
 */
export function setInDatabaseByPath(data, path) {
	return {
		type: SET_IN_DATABASE_BY_PATH,
		data, path
	};
}

/**
 * Добавляет (deepMerge) значение поля в database
 * @param {Any} data Данные для вставки
 * @param {String} path Путь для вставки
 */
export function appendInDatabaseByPath(data, path, options) {
	return {
		type: APPEND_IN_DATABASE_BY_PATH,
		data, path, options
	};
}

/**
 * Добавляет значение поля в начало массива расположенного в database по пути path
 * @param {Any} data Данные для вставки
 * @param {String} path Путь для вставки
 */
export function prependInDatabaseByPath(data, path) {
	return {
		type: PREPEND_IN_DATABASE_BY_PATH,
		data, path
	};
}
export function removeInDatabaseByPath(key, path) {
	return {
		type: REMOVE_IN_DATABASE_BY_PATH,
		key, path
	};
}
export function makeIndexInDatabaseByPath(path, key) {
	return {
		type: MAKE_INDEX_IN_DATABASE_BY_PATH,
		path,
		key,
	};
}
export function addUsers() {
	const url = 'https://gorest.co.in/public-api/users';
	const keys_path = `${USERS_KEY}`;
	return (dispatch) => {
		fetch(url)
		.then(response => response.json())
		.then(json => {
			const data = json.data;
			dispatch(appendInDatabaseByPath(data, keys_path))
		})
	}
}

// export function addUsers() {
// 	const url = 'https://gorest.co.in/public-api/users';
// 	fetch(url)
//     .then(response => response.json())
//     .then(json => json)
// if (!d.error) {
// 	dispatch(appendInDatabaseByPath(d, keys_path));
// }
// }
export const requestAction = ( key ) =>
({
    type: REQUEST_DATA,
    key: key,
});