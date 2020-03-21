/**
 * Contains constants required that are used to make actions inside 
 * reducer and on dispatch callback from 'useReducer'.
 * feature specific constants.
 */
export const SEARCH_TYPES = {
  RESTAURANT: 'RESTAURANT',
  OTHERS: 'OTHERS',
};

export const ORDERBY_OPTIONS = {
  ASC: 'asc',
  DESC: 'desc',
};

export const SORTBY_OPTIONS = ['rating', 'price'];

export const CHANGE_SEARCH_TYPE = 'CHANGE_SEARCH_TYPE';
export const CHANGE_CITY_SEARCH_TEXT = 'CHANGE_CITY_SEARCH_TEXT';
export const CHANGE_PRIMARY_SEARCH_TEXT = 'CHANGE_PRIMARY_SEARCH_TEXT';
export const CHANGE_CITY_SEARCH_OPTIONS = 'CHANGE_CITY_SEARCH_OPTIONS';
export const CHANGE_SORTBY_OPTION = 'CHANGE_SORTBY_OPTION';
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER';
export const CHANGE_FILTER_RATING = 'CHANGE_FILTER_RATING';

export const SELECT_CITY = 'SELECT_CITY';
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';
export const SELECT_OTHER_SEARCH = 'SELECT_OTHER_SEARCH';

export const ADD_RESTAURANTS = 'ADD_RESTAURANTS';
export const ADD_OTHER_SEARCH_OPTIONS = 'ADD_OTHER_SEARCH_OPTIONS';

export const CLOSE_RESTAURANT_MODAL = 'CLOSE_RESTAURANT_MODAL';

export const ENTITY_CUISINES = 'cuisines';
export const ENTITY_CATEGORIES = 'categories';
