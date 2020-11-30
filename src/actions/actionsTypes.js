/**
 * REQUEST_DATA
 * @type {String}
 */
export const REQUEST_DATA = 'REQUEST_DATA';
export const RESPONSE_FAIL = 'RESPONSE_FAIL';

/**
 * Удаляет заданные id из массива results
 * @type {String}
 */
export const DATA_REMOVE = 'DATA_REMOVE';
/**
 * Добавляет данные по заданному ключу в массив entities и
 * добавляет по заданному ключу в массив results массив с заданным id, который содержит id добавленные в массив entities
 * Пример:
 * Вызван метод на добавление свойств для категории с id 29. Получен action:
 * ▶type: "RESPONSE_DATA_ADD"
 * ▶response
 * 	▶data
 * 		▶entities
 * 			▶category_properties: { 74: {…}, 1712: {…}, 1713: {…}, … }
 * 		▶result
 * 			▶category_properties
 * 				▶29: [74, 1712, 1713, …]
 * ▶key: "category_properties"
 * Ответ (response) преобразуется по схеме с помощью библиотеки normalizr.
 * Массив entities будет дополнен данными запроса (▶entities) - в массив entities.category_properties будут добавлены id 74, 1712, 1713 и т.д.
 * Для категории 29 в массиве result.category_properties будут добавлены id 74, 1712, 1713 и т.д.
 * @type {String}
 */
export const RESPONSE_DATA_ADD = 'RESPONSE_DATA_ADD';
/**
 * Выполняет те же действия что и RESPONSE_DATA_ADD, но в массиве result удаляет старые массивы и добавляет массив с полученными данными
 * @type {String}
 */
export const RESPONSE_DATA_REPLACE = 'RESPONSE_DATA_REPLACE';
export const RESPONSE_DATA_NONE = 'RESPONSE_DATA_NONE';
export const RESPONSE_AUTH_USER = 'RESPONSE_AUTH_USER';
export const SET_AUTH_USER = 'SET_AUTH_USER';

export const RESET_ON_PAGE = 'RESET_ON_PAGE';

/**
 * PROPERTIES_SET -
 * добавляет значения параметров в поля properties[id] и properties[value] объекта filters
 * @type {String}
 */
export const PROPERTIES_SET = 'PROPERTIES_SET';


export const FILTERS_SET = 'FILTERS_SET';
export const FILTERS_CLEAR = 'FILTERS_CLEAR';
export const FILTER_REMOVE = 'FILTER_REMOVE';
export const FILTERS_RELATIONS_SET = 'FILTERS_RELATIONS_SET';

export const MODAL_OPEN_INFO = 'MODAL_OPEN_INFO';
export const MODAL_OPEN_WITH_PARAMS = 'MODAL_OPEN_WITH_PARAMS';
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const CHANGE_RESULT = 'CHANGE_RESULT';

export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const REG_CHANGE = 'REG_CHANGE';

export const CATEGORY_CHANGE = 'CATEGORY_CHANGE';
export const CATEGORY_SET = 'CATEGORY_SET';
export const CATEGORY_CLEAR = 'CATEGORY_CLEAR';

export const GEO_CHANGE = 'GEO_CHANGE';
export const GEO_COORDS_CHANGE = 'GEO_COORDS_CHANGE';
/**
 * Создает список (search - результаты поиска или near - ближайшие города) в store.geo.lists
 */
export const SET_GEO_LIST = 'SET_GEO_LIST';

export const SET_CURRENCY = 'SET_CURRENCY';

/**
 * Создает вебсокет и вешает слушателей на каналы
 */
export const SET_WEBSOCKET = 'SET_WEBSOCKET';

/**
 * Регистрация событий в окружении браузера
 * Вызывается 1 раз при добавлении компонента App
 * Вешает "слушателей" на события при смене вкладок
 */
export const SET_ENVIRONMENT = 'SET_ENVIRONMENT';

export const TOGGLE_CAN_LEAVE_PAGE = 'TOGGLE_CAN_LEAVE_PAGE';
export const SET_STEAM_TRADE_STATUS = 'SET_STEAM_TRADE_STATUS';
export const SET_MAIN_BANNER = 'SET_MAIN_BANNER';
export const SET_MODAL_INFO = 'SET_MODAL_INFO';
export const SET_SUCCESSFUL_DEAL = 'SET_SUCCESSFUL_DEAL';
export const SET_TYPE_USER = 'set_type_user';
export const SET_FOOTER = 'SET_FOOTER';
export const SET_BROWSET_TAB = 'SET_BROWSET_TAB';
export const SET_USER_CLICK = 'SET_USER_CLICK';
export const SET_COLUMNS = 'SET_COLUMNS';
export const SET_BUTTONS = 'SET_BUTTONS';
export const SET_HEADER = 'SET_HEADER';
export const SET_HEADER_EXTRA_BTN_USER = 'SET_HEADER_EXTRA_BTN_USER';
export const SET_HEADER_SEARCH = 'SET_HEADER_SEARCH'
export const SET_HELPERS = 'SET_HELPERS';
export const SET_WALL_POST_EDITING = 'SET_WALL_POST_EDITING';
export const SET_AUTH_SETTINGS_MODAL = 'SET_AUTH_SETTINGS_MODAL';
export const SET_MENU = 'SET_MENU';
export const SET_GLOBAL_SEARCH_VALUE = 'SET_GLOBAL_SEARCH_VALUE';
export const SET_FAQ_SEARCH_VALUE = 'set_faq_search_value';
export const SET_GLOBAL_SEARCH_AREAS = 'SET_GLOBAL_SEARCH_AREAS';
export const SET_LOCAL_SEARCH = 'SET_LOCAL_SEARCH';
export const TOGGLE_GLOBAL_SEARCH_EXTRA = 'TOGGLE_GLOBAL_SEARCH_EXTRA';
export const SET_BUTTON_SEARCH_FILTER = 'SET_BUTTON_SEARCH_FILTER';
export const TOGGLE_GLOBAL_SEARCH_EXTRA_HIGHLIGHT = 'TOGGLE_GLOBAL_SEARCH_EXTRA_HIGHLIGHT';
export const PUSH_PAGE_TO_HISTORY = 'PUSH_PAGE_TO_HISTORY';
export const SET_PAGE_IN_HISTORY = 'SET_PAGE_IN_HISTORY';
export const SET_SYSTEM_MESSAGE = 'SET_SYSTEM_MESSAGE';
export const SET_LIVE_FEED = 'SET_LIVE_FEED';
export const SAVE_CATALOG_FILTERS = 'SAVE_CATALOG_FILTERS';
export const SET_UPDATE_INFO = 'SET_UPDATE_INFO';
export const SET_PAGE_MESSAGES = 'SET_PAGE_MESSAGES';
/**
 * Перелистывает левую колонку к форме входа/регистрации и подсвечивает ее
 */
export const SET_REQUEST_LOGIN_FORM = 'SET_LOGIN_FORM';

/**
 * Last visited page
 */
export const SET_LAST_PATH = 'SET_LAST_PATH';
/**
 * Set current page information: path, title
 */
export const SET_PAGE_INFO = 'SET_PAGE_INFO';
/**
 * Используется для установки статуса страницы, например ошибоки 404 и редиректов (используется для отдачи верного кода с сервера)
 */
export const SET_PAGE_RESOLVE = 'SET_PAGE_RESOLVE';
export const SET_PAGE_ERROR = 'SET_PAGE_RESOLVE';
export const RESET_PAGE_ERROR = 'RESET_PAGE_RESOLVE';

export const SET_SSR_INFO = 'SET_SSR_INFO';


/**
 * Last error which got when sending some form data
 */
export const SET_LAST_ERROR = 'SET_LAST_ERROR';
export const SET_ACTIVE_TAB_ID = 'SET_ACTIVE_TAB_ID';
export const SET_BROWSET_TAB_ID = 'SET_BROWSET_TAB_ID';


export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';
/**
 * Sets notifications from given list
 */
export const SET_NOTIFICATIONS = 'SET_UNREAD_NOTIFICATIONS';
export const SET_ALL_NOTIFICATIONS = 'SET_ALL_NOTIFICATIONS';


/***SOUND***/
export const PLAY_NOTIFICATION = 'PLAY_NOTIFICATION';
export const STOP_NOTIFICATION = 'STOP_NOTIFICATION';
export const SET_PLAYER_QUE = 'SET_PLAYER_QUE';
export const SET_PLAYER_STATE = 'SET_PLAYER_STATE';
export const SET_PLAYER_STATUS = 'SET_PLAYER_STATUS';

/***HELPER***/
// Добавить массив action.helpers в список подсказок на этой странице
export const SET_PAGE_HELPERS = 'SET_PAGE_HELPERS';
// Удалить массив action.helpers в список подсказок на этой странице
export const UNSET_PAGE_HELPERS = 'UNSET_PAGE_HELPERS';


/***DATABASE***/
/**
 * Добавляет данные (action.data)
 * в поле (action.field)
 * для сущности (action.entity)
 */
export const ADD_TO_DATABASE = 'ADD_TO_DATABASE';
/**
 * Удаляет сущность (action.entity) в поле (action.field)
 */
export const REMOVE_FROM_DATABASE = 'REMOVE_TO_DATABASE';
/**
 * Добавляет элементы списка (action.list)
 * в поле (action.field)
 * для сущности (action.entity)
 */
export const APPEND_LIST_TO_DATABASE = 'APPEND_LIST_TO_DATABASE';
export const UPDATE_LIST_IN_DATABASE = APPEND_LIST_TO_DATABASE;
export const PREPAND_LIST_TO_DATABASE = 'PREPAND_LIST_TO_DATABASE';

/**
 * Производят манипуляции в store.database по заданному пути (action.path)
 * SET_IN_DATABASE_BY_PATH - присваивает значение action.data
 * APPEND_IN_DATABASE_BY_PATH - добавляет action.list в конец списка
 * PREPEND_IN_DATABASE_BY_PATH - добавляет action.list в начало списка
 * REMOVE_IN_DATABASE_BY_PATH - удаляет action.key из списка
 * MAKE_INDEX_IN_DATABASE_BY_PATH - строит индекс по заданному пути action.path
 */
export const SET_IN_DATABASE_BY_PATH = 'SET_IN_DATABASE_BY_PATH';
export const APPEND_IN_DATABASE_BY_PATH = 'APPEND_IN_DATABASE_BY_PATH';
export const PREPEND_IN_DATABASE_BY_PATH = 'PREPEND_IN_DATABASE_BY_PATH';
export const REMOVE_IN_DATABASE_BY_PATH = 'REMOVE_IN_DATABASE_BY_PATH';
export const MAKE_INDEX_IN_DATABASE_BY_PATH = 'MAKE_INDEX_IN_DATABASE_BY_PATH';
/**
 * Раскладывает данные в database
 * @type {String}
 */
export const MERGE_ENTITIES_IN_DATABASE = 'MERGE_ENTITIES_IN_DATABASE';


/**
 * Обновляет/добавляет таймстемп нотификации для диалога в state.notifications.message_is_read
 */
export const MARK_MESSAGES_AS_SEEN = 'MARK_MESSAGES_AS_SEEN';

/**
 * Обновляет элемент в поле (action.field),
 * использует массив ключей (database.keys) для нахождения элемента.
 * Для использования необходимо добавить название поля в массив withKeys в файле reducers/database.js
 * @type {String}
 */
export const UPDATE_IN_DATABASE_BY_ID = 'UPDATE_IN_DATABASE_BY_ID';

/**
 * Переключают состояние в store для ключа (action.key)
 * @type {String}
 */
export const START_FETCH = 'START_FETCH';
export const STOP_FETCH = 'STOP_FETCH';


export const ADD_TO_FILELOADER = 'ADD_TO_FILELOADER';
export const UPDATE_FILELOADER_PROGRESS = 'UPDATE_FILELOADER_PROGRESS';
export const UPDATE_IN_FILELOADER = 'UPDATE_IN_FILELOADER';
export const CLOSE_FILELOADER = 'CLOSE_FILELOADER';

