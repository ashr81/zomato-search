import {
  SEARCH_TYPES, CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT, CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY
} from '../actions/restaurants';

export const initialState = {
  restaurants: [],
  sortBy: '',
  order: 'asc',
  searchType: SEARCH_TYPES.RESTAURANT,
  citySearchLoading: false,
  citySearchValue: '',
  citiesSearchCollection: [],
  selectedRestaurant: {},
  selectedOtherSearchValue: {},
  selectedPrimarySearchValue: {},
  primarySearchValue: ''
}

const reducer = (state, action) => {
  const { type, ...payload } = action;
  switch(type) {
    case CHANGE_SEARCH_TYPE: {
      return {
        ...state,
        searchType: state.searchType === SEARCH_TYPES.RESTAURANT ? SEARCH_TYPES.OTHERS : SEARCH_TYPES.RESTAURANT,
        selectedPrimarySearchValue: state.searchType === SEARCH_TYPES.RESTAURANT ? state.selectedRestaurant : state.selectedOtherSearchValue
      }
    }
    case CHANGE_CITY_SEARCH_TEXT: {
      return {
        ...state,
        citySearchLoading: true,
        citySearchValue: payload.value
      }
    }
    case CHANGE_CITY_SEARCH_OPTIONS: {
      return {
        ...state,
        citiesSearchCollection: payload.options
      }
    }
    case SELECT_CITY: {
      return {
        ...state,
        citySearchValue: state.citiesSearchCollection.filter(city => city.id === payload.cityId)[0].name,
        citiesSearchCollection: [],
        citySearchLoading: false
      }
    }
    default: {
      return {
        ...state,
        ...payload
      }
    }
  }
}

export default reducer;