
/**
 * @param {String} url
 * Делает запрос с помощью fetch
 * @param {String} [method='get']
 */

export function request(url, method = 'GET') {
	return fetch(url).then(response => {
		return response.json();
	}).catch(error => {
		return Promise.reject(error);
	});
}