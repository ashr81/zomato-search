import {
  SEARCH_TYPES, CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT,
  CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY, ADD_RESTAURANTS,
  SELECT_RESTAURANT, CLOSE_RESTAURANT_MODAL, CHANGE_PRIMARY_SEARCH_TEXT
} from '../actions/restaurants';

export const initialState = {
  restaurants: [],
  loadRestaurantData: false,
  otherCollections: {},
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
        selectedPrimarySearchValue: state.searchType === SEARCH_TYPES.RESTAURANT ? state.selectedRestaurant : state.selectedOtherSearchValue,
        primarySearchValue: '',
        restaurants: [],
        loadRestaurantData: false
      }
    }
    case CHANGE_PRIMARY_SEARCH_TEXT: {
      return {
        ...state,
        loadRestaurantData: true,
        primarySearchValue: payload.value
      }
    }
    case ADD_RESTAURANTS: {
      return {
        ...state,
        restaurants: payload.data.restaurants.map(option => option.restaurant)
      }
    }
    case CLOSE_RESTAURANT_MODAL: {
      return {
        ...state,
        restaurants: [],
        selectedRestaurant: {},
        loadRestaurantData: false,
        primarySearchValue: ''
      }
    }
    case SELECT_RESTAURANT: {
      return {
        ...state,
        selectedRestaurant: state.restaurants.filter(restaurant => restaurant.id === payload.restaurantId)[0]
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