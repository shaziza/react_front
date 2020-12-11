// @ts-check
/**
 * Return field by given string path
 * @param {any} obj
 * @param {any} path
 * @return {any}
*/
export const getPathFromObjectByArray = (obj, path) => {
	let key = path.pop();
	let result = path.length !== 0 ? getPathFromObjectByArray(obj, path) : obj;
	return result ? result[key] : result;
}
/**
 * Return field by given string path
 * @param {Object} obj
 * @param {String} path
 * @param {any} defaultValue
 * @return {any}
*/
export const getPathFromObject = (obj, path, defaultValue) => {
	let keys = path.split('.');
	let result = getPathFromObjectByArray(obj, keys);
	return result === undefined ? defaultValue : result;
}
/**
 * @param {Object} obj
 * @param {any} path
 * @param {string} value
 * @param {any} action
 * @param {any} options
 * @return {any}
*/
export const assignToPathFromObjectToValue = (obj, path, value, action, options) => {
	let keys = path.split('.');
	return findPathAndAssign(obj, keys, value, action, options);
}
/**
 * @param {any} obj
 * @param {any} keys
 * @param {string} value
 * @param {any} action
 * @param {any} options
 * @return {any}
*/
export const findPathAndAssign = (obj, keys, value, action, options) => {
	if (keys.length === 0) {
		return action ? action(obj, value, options) : value;
	}
	let key = keys.shift();
	let curr = Array.isArray(obj[key]) ? [...obj[key]] : Object.assign({}, obj[key]);
	return Object.assign(obj, {[key]: findPathAndAssign(curr, keys, value, action, options)});
}
/**
 * @param {any} arr
 * @param {any} value
 * @param {any} deep_level
 * @return {any}
*/
export const appendInArray = (arr, value, {deep_level = 0} = {}) => {
	if (Array.isArray(value)) return [...arr, ...value];
	if (typeof(value) === 'object') return appendInObject(arr, value, {deep_level});
	return Array.isArray(arr) ? [...arr, value] : (value);
}
/**
 * @param {any} obj
 * @param {any} value
 * @param {any} deep_level
 * @return {any}
*/
export const appendInObject = (obj, value, {deep_level} = {}) => {
	if (deep_level > 0) {
		let result = Object.assign({}, obj);
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (result.hasOwnProperty(key)) {
					result[key] = appendInArray(result[key], value[key], {deep_level: deep_level - 1})
				} else {
					result[key] = value[key]
				}
			}
		}
		return result;
	} else {
		return obj ? Object.assign({}, obj, value) : value;
	}
}
// @ts-ignore
export function BEMName(block = '', element = '', modificators = [], extra) {
	const name = block + (element ? ('__' + element) : '');
	return name +
		' ' + modificators.map(i => i ? `${name}--${i}` : '').join(' ')
		+ (extra ? (' ' + extra) : '');
}