import { SEARCH_TYPES, CHANGE_SEARCH_TYPE } from '../actions/restaurants';

export const initialState = {
  restaurants: [],
  sortBy: '',
  order: 'asc',
  searchType: SEARCH_TYPES.RESTAURANT,
  selectedCategory: {},
  selectedLocality: {},
  selectedCuisineType: {},
  selectedRestaurant: {}
}

const reducer = (state, action) => {
  const { type, ...rest } = action;
  switch(type) {
    case CHANGE_SEARCH_TYPE: {
      return {
        ...state,
        searchType: state.searchType === SEARCH_TYPES.RESTAURANT ? SEARCH_TYPES.OTHERS : SEARCH_TYPES.RESTAURANT
      }
    }
  }
}

export default reducer;