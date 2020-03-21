/**
 * reducer used by useReducer for the restaurants or home page.
 */
import {
  SEARCH_TYPES, CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT,
  CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY, ADD_RESTAURANTS,
  SELECT_RESTAURANT, CLOSE_RESTAURANT_MODAL, CHANGE_PRIMARY_SEARCH_TEXT,
  ADD_OTHER_SEARCH_OPTIONS, SELECT_OTHER_SEARCH, ENTITY_CUISINES,
  ENTITY_CATEGORIES,
  ORDERBY_OPTIONS,
  CHANGE_SORT_ORDER,
  CHANGE_SORTBY_OPTION,
  CHANGE_FILTER_RATING,
} from '../actions/restaurants';

export const initialState = {
  restaurants: [],
  restaurantsLoading: false,
  otherSearchOptions: {
    cuisines: [],
    categories: [],
  },
  searchType: SEARCH_TYPES.RESTAURANT,
  citySearchLoading: false,
  citySearchValue: '',
  citiesSearchCollection: [],
  selectedRestaurant: {},
  selectedOtherSearchValues: [],
  selectedPrimarySearchValue: {},
  primarySearchValue: '',
  sortOrder: ORDERBY_OPTIONS.ASC,
  sortBy: '',
  filterByRating: [0, 5],
};

const reducer = (state, action) => {
  const { type, ...payload } = action;
  switch (type) {
    case CHANGE_SEARCH_TYPE: {
      return {
        ...state,
        searchType: state.searchType === SEARCH_TYPES.RESTAURANT ? SEARCH_TYPES.OTHERS : SEARCH_TYPES.RESTAURANT,
        selectedPrimarySearchValue: state.searchType === SEARCH_TYPES.RESTAURANT ? state.selectedRestaurant : state.selectedOtherSearchValues,
        primarySearchValue: '',
        restaurants: [],
        restaurantsLoading: state.searchType === SEARCH_TYPES.RESTAURANT,
      };
    }
    case ADD_OTHER_SEARCH_OPTIONS: {
      const cuisines = payload.cuisines.data.cuisines.map(({ cuisine }) => ({ id: cuisine.cuisine_id, name: cuisine.cuisine_name }));
      const categories = payload.categories.data.categories.map((category) => category.categories);
      return {
        ...state,
        otherSearchOptions: {
          [ENTITY_CUISINES]: cuisines,
          [ENTITY_CATEGORIES]: categories,
        },
      };
    }
    case CHANGE_SORT_ORDER:
    case CHANGE_SORTBY_OPTION: {
      return {
        ...state,
        ...payload,
        restaurantsLoading: state.searchType !== SEARCH_TYPES.RESTAURANT,
      };
    }
    case CHANGE_PRIMARY_SEARCH_TEXT: {
      return {
        ...state,
        restaurantsLoading: true,
        primarySearchValue: payload.value,
      };
    }
    case ADD_RESTAURANTS: {
      let restaurants = payload.data.restaurants
        .map((option) => option.restaurant);
      if (state.searchType !== SEARCH_TYPES.RESTAURANT) {
        restaurants = restaurants.filter((option) => option.user_rating.aggregate_rating >= state.filterByRating[0] && option.user_rating.aggregate_rating <= state.filterByRating[1]);
      }
      return {
        ...state,
        restaurants,
        restaurantsLoading: false,
      };
    }
    case CLOSE_RESTAURANT_MODAL: {
      return {
        ...state,
        selectedRestaurant: {},
        restaurantsLoading: false,
      };
    }
    case SELECT_RESTAURANT: {
      return {
        ...state,
        selectedRestaurant: state.restaurants.filter((restaurant) => restaurant.id === payload.restaurantId)[0],
      };
    }
    case SELECT_OTHER_SEARCH: {
      const entityId = parseInt(payload.entityId);
      const isExist = state.selectedOtherSearchValues.some((value) => value.id === entityId && value.type === payload.entityType);
      return {
        ...state,
        selectedOtherSearchValues: isExist
          ? state.selectedOtherSearchValues.filter((value) => value.id !== entityId || value.type !== payload.entityType)
          : [...state.selectedOtherSearchValues, { id: entityId, type: payload.entityType, name: payload.entityName }],
        restaurantsLoading: true,
      };
    }
    case CHANGE_CITY_SEARCH_TEXT: {
      return {
        ...state,
        citySearchLoading: true,
        citySearchValue: payload.value,
      };
    }
    case CHANGE_CITY_SEARCH_OPTIONS: {
      return {
        ...state,
        citySearchLoading: false,
        citiesSearchCollection: payload.options,
        restaurants: []
      };
    }
    case SELECT_CITY: {
      return {
        ...state,
        citySearchValue: payload.selectedCity.name || '',
        citiesSearchCollection: [],
        citySearchLoading: false
      };
    }
    case CHANGE_FILTER_RATING: {
      state.filterByRating[payload.index] = payload.value;
      return {
        ...state,
        filterByRating: [...state.filterByRating],
        restaurantsLoading: true,
      };
    }
    default: {
      return {
        ...state,
        ...payload,
      };
    }
  }
};

export default reducer;
