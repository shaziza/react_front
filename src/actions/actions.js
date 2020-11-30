import {normalize, schema} from 'normalizr';
import {
    SET_IN_DATABASE_BY_PATH,
} from './actionsTypes';
import {
	USERS_KEY,
	COUNT_PAGES_KEY,
	POSTS_KEY,
	COMMENTS_KEY,
	POST_KEY
	// KEYS_LIST_KEY
} from './keys';
import {request} from "./request";
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
export function getUsers(pageNumber) {
	const url = pageNumber ? `https://gorest.co.in/public-api/users?Page=${pageNumber}` : 'https://gorest.co.in/public-api/users';
	const keys_path = `${USERS_KEY}`;
	const keys_path_pages = `${COUNT_PAGES_KEY}.users`;
	return (dispatch) => {
		request(url)
		.then(d => {
			const data = d.data;
			const pages = d.meta.pagination;
			dispatch(setInDatabaseByPath(data, keys_path))
			dispatch(setInDatabaseByPath(pages, keys_path_pages))
		})
	}
}
export function getPosts(id) {
	const url = `https://gorest.co.in/public-api/users/${id}/posts`;
	const keys_path = `${POSTS_KEY}`;
	const keys_path_pages = `${COUNT_PAGES_KEY}.posts`;
	return (dispatch) => {
		request(url)
		.then(d => {
			const data = d.data;
			const pages = d.meta.pagination;
			dispatch(setInDatabaseByPath(data, keys_path))
			dispatch(setInDatabaseByPath(pages, keys_path_pages))
		})
	}
}
export function getPost(id, post_id) {
	const url = `https://gorest.co.in/public-api/users/${id}/posts`;
	const keys_path = `${POST_KEY}`;
	return (dispatch) => {
		request(url)
		.then(d => {
			const data = d.data;
			if (data.length > 0) {
				const post = new schema.Entity('posts');
				let list = new schema.Array( post );
				const normalizedData = normalize(data, list);
				const item = normalizedData.entities.posts[post_id];
				dispatch(setInDatabaseByPath(item, keys_path));
			}
		})
	}
}
export function getComments(id) {
	const url = `https://gorest.co.in/public-api/posts/${id}/comments`;
	const keys_path = `${COMMENTS_KEY}`;
	return (dispatch) => {
		request(url)
		.then(d => {
			const data = d.data;
			dispatch(setInDatabaseByPath(data, keys_path))
		})
	}
}