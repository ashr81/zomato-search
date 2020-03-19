import {
  SEARCH_TYPES, CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT,
  CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY, ADD_RESTAURANTS,
  SELECT_RESTAURANT, CLOSE_RESTAURANT_MODAL, CHANGE_PRIMARY_SEARCH_TEXT,
  ADD_OTHER_SEARCH_OPTIONS, SELECT_OTHER_SEARCH, ENTITY_CUISINES,
  ENTITY_CATEGORIES
} from '../actions/restaurants';

const CUISINES_MOCK_DATA = {"cuisines":[{"cuisine":{"cuisine_id":1035,"cuisine_name":"Afghan"}},{"cuisine":{"cuisine_id":152,"cuisine_name":"African"}},{"cuisine":{"cuisine_id":1,"cuisine_name":"American"}},{"cuisine":{"cuisine_id":2,"cuisine_name":"Andhra"}},{"cuisine":{"cuisine_id":4,"cuisine_name":"Arabian"}},{"cuisine":{"cuisine_id":3,"cuisine_name":"Asian"}},{"cuisine":{"cuisine_id":292,"cuisine_name":"Awadhi"}},{"cuisine":{"cuisine_id":193,"cuisine_name":"BBQ"}},{"cuisine":{"cuisine_id":5,"cuisine_name":"Bakery"}},{"cuisine":{"cuisine_id":227,"cuisine_name":"Bar Food"}},{"cuisine":{"cuisine_id":10,"cuisine_name":"Bengali"}},{"cuisine":{"cuisine_id":270,"cuisine_name":"Beverages"}},{"cuisine":{"cuisine_id":1013,"cuisine_name":"Bihari"}},{"cuisine":{"cuisine_id":7,"cuisine_name":"Biryani"}},{"cuisine":{"cuisine_id":247,"cuisine_name":"Bubble Tea"}},{"cuisine":{"cuisine_id":168,"cuisine_name":"Burger"}},{"cuisine":{"cuisine_id":22,"cuisine_name":"Burmese"}},{"cuisine":{"cuisine_id":30,"cuisine_name":"Cafe"}},{"cuisine":{"cuisine_id":994,"cuisine_name":"Charcoal Chicken"}},{"cuisine":{"cuisine_id":18,"cuisine_name":"Chettinad"}},{"cuisine":{"cuisine_id":25,"cuisine_name":"Chinese"}},{"cuisine":{"cuisine_id":1040,"cuisine_name":"Coffee"}},{"cuisine":{"cuisine_id":35,"cuisine_name":"Continental"}},{"cuisine":{"cuisine_id":100,"cuisine_name":"Desserts"}},{"cuisine":{"cuisine_id":268,"cuisine_name":"Drinks Only"}},{"cuisine":{"cuisine_id":38,"cuisine_name":"European"}},{"cuisine":{"cuisine_id":40,"cuisine_name":"Fast Food"}},{"cuisine":{"cuisine_id":271,"cuisine_name":"Finger Food"}},{"cuisine":{"cuisine_id":501,"cuisine_name":"Frozen Yogurt"}},{"cuisine":{"cuisine_id":47,"cuisine_name":"Goan"}},{"cuisine":{"cuisine_id":48,"cuisine_name":"Gujarati"}},{"cuisine":{"cuisine_id":143,"cuisine_name":"Healthy Food"}},{"cuisine":{"cuisine_id":49,"cuisine_name":"Hyderabadi"}},{"cuisine":{"cuisine_id":233,"cuisine_name":"Ice Cream"}},{"cuisine":{"cuisine_id":114,"cuisine_name":"Indonesian"}},{"cuisine":{"cuisine_id":55,"cuisine_name":"Italian"}},{"cuisine":{"cuisine_id":60,"cuisine_name":"Japanese"}},{"cuisine":{"cuisine_id":164,"cuisine_name":"Juices"}},{"cuisine":{"cuisine_id":65,"cuisine_name":"Kashmiri"}},{"cuisine":{"cuisine_id":178,"cuisine_name":"Kebab"}},{"cuisine":{"cuisine_id":62,"cuisine_name":"Kerala"}},{"cuisine":{"cuisine_id":67,"cuisine_name":"Korean"}},{"cuisine":{"cuisine_id":66,"cuisine_name":"Lebanese"}},{"cuisine":{"cuisine_id":157,"cuisine_name":"Lucknowi"}},{"cuisine":{"cuisine_id":102,"cuisine_name":"Maharashtrian"}},{"cuisine":{"cuisine_id":69,"cuisine_name":"Malaysian"}},{"cuisine":{"cuisine_id":71,"cuisine_name":"Malwani"}},{"cuisine":{"cuisine_id":72,"cuisine_name":"Mangalorean"}},{"cuisine":{"cuisine_id":70,"cuisine_name":"Mediterranean"}},{"cuisine":{"cuisine_id":73,"cuisine_name":"Mexican"}},{"cuisine":{"cuisine_id":137,"cuisine_name":"Middle Eastern"}},{"cuisine":{"cuisine_id":1015,"cuisine_name":"Mithai"}},{"cuisine":{"cuisine_id":1018,"cuisine_name":"Modern Indian"}},{"cuisine":{"cuisine_id":1051,"cuisine_name":"Momos"}},{"cuisine":{"cuisine_id":74,"cuisine_name":"Mongolian"}},{"cuisine":{"cuisine_id":147,"cuisine_name":"Moroccan"}},{"cuisine":{"cuisine_id":75,"cuisine_name":"Mughlai"}},{"cuisine":{"cuisine_id":166,"cuisine_name":"Naga"}},{"cuisine":{"cuisine_id":117,"cuisine_name":"Nepalese"}},{"cuisine":{"cuisine_id":231,"cuisine_name":"North Eastern"}},{"cuisine":{"cuisine_id":50,"cuisine_name":"North Indian"}},{"cuisine":{"cuisine_id":1057,"cuisine_name":"Odia"}},{"cuisine":{"cuisine_id":1048,"cuisine_name":"Paan"}},{"cuisine":{"cuisine_id":139,"cuisine_name":"Pakistani"}},{"cuisine":{"cuisine_id":290,"cuisine_name":"Parsi"}},{"cuisine":{"cuisine_id":82,"cuisine_name":"Pizza"}},{"cuisine":{"cuisine_id":87,"cuisine_name":"Portuguese"}},{"cuisine":{"cuisine_id":88,"cuisine_name":"Rajasthani"}},{"cuisine":{"cuisine_id":1005,"cuisine_name":"Roast Chicken"}},{"cuisine":{"cuisine_id":1023,"cuisine_name":"Rolls"}},{"cuisine":{"cuisine_id":998,"cuisine_name":"Salad"}},{"cuisine":{"cuisine_id":304,"cuisine_name":"Sandwich"}},{"cuisine":{"cuisine_id":83,"cuisine_name":"Seafood"}},{"cuisine":{"cuisine_id":993,"cuisine_name":"Sindhi"}},{"cuisine":{"cuisine_id":119,"cuisine_name":"Singaporean"}},{"cuisine":{"cuisine_id":972,"cuisine_name":"South American"}},{"cuisine":{"cuisine_id":85,"cuisine_name":"South Indian"}},{"cuisine":{"cuisine_id":86,"cuisine_name":"Sri Lankan"}},{"cuisine":{"cuisine_id":141,"cuisine_name":"Steak"}},{"cuisine":{"cuisine_id":90,"cuisine_name":"Street Food"}},{"cuisine":{"cuisine_id":177,"cuisine_name":"Sushi"}},{"cuisine":{"cuisine_id":1054,"cuisine_name":"Tamil"}},{"cuisine":{"cuisine_id":163,"cuisine_name":"Tea"}},{"cuisine":{"cuisine_id":150,"cuisine_name":"Tex-Mex"}},{"cuisine":{"cuisine_id":95,"cuisine_name":"Thai"}},{"cuisine":{"cuisine_id":93,"cuisine_name":"Tibetan"}},{"cuisine":{"cuisine_id":142,"cuisine_name":"Turkish"}},{"cuisine":{"cuisine_id":99,"cuisine_name":"Vietnamese"}},{"cuisine":{"cuisine_id":1024,"cuisine_name":"Wraps"}}]}
const CATEGORIES_MOCK_DATA = {"categories":[{"categories":{"id":1,"name":"Delivery"}},{"categories":{"id":2,"name":"Dine-out"}},{"categories":{"id":3,"name":"Nightlife"}},{"categories":{"id":4,"name":"Catching-up"}},{"categories":{"id":5,"name":"Takeaway"}},{"categories":{"id":6,"name":"Cafes"}},{"categories":{"id":7,"name":"Daily Menus"}},{"categories":{"id":8,"name":"Breakfast"}},{"categories":{"id":9,"name":"Lunch"}},{"categories":{"id":10,"name":"Dinner"}},{"categories":{"id":11,"name":"Pubs & Bars"}},{"categories":{"id":13,"name":"Pocket Friendly Delivery"}},{"categories":{"id":14,"name":"Clubs & Lounges"}}]}
export const initialState = {
  restaurants: [],
  loadRestaurantData: false,
  otherSearchOptions: {
    cuisines: CUISINES_MOCK_DATA.cuisines.map(({ cuisine }) => ({id: cuisine.cuisine_id, name: cuisine.cuisine_name})),
    categories: CATEGORIES_MOCK_DATA.categories.map(category => category.categories)
  },
  sortBy: '',
  order: 'asc',
  searchType: SEARCH_TYPES.RESTAURANT,
  citySearchLoading: false,
  citySearchValue: '',
  citiesSearchCollection: [],
  selectedRestaurant: {},
  selectedOtherSearchValues: [],
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
        selectedPrimarySearchValue: state.searchType === SEARCH_TYPES.RESTAURANT ? state.selectedRestaurant : state.selectedOtherSearchValues,
        primarySearchValue: '',
        restaurants: [],
        loadRestaurantData: false
      }
    }
    case ADD_OTHER_SEARCH_OPTIONS: {
      const cuisines = payload.cuisines.data.cuisines.map(({ cuisine }) => ({id: cuisine.cuisine_id, name: cuisine.cuisine_name}));
      const categories = payload.categories.data.categories.map(category => category.categories)
      return {
        ...state,
        otherSearchOptions: {
          [ENTITY_CUISINES]: cuisines,
          [ENTITY_CATEGORIES]: categories
        }
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
    case SELECT_OTHER_SEARCH: {
      const entityId = parseInt(payload.entityId)
      const isExist = state.selectedOtherSearchValues.some(value => value.id === entityId && value.type === payload.entityType);
      return {
        ...state,
        selectedOtherSearchValues: isExist ?
        state.selectedOtherSearchValues.filter(value => value.id !== entityId || value.type !== payload.entityType) :
        [...state.selectedOtherSearchValues, {id: entityId, type: payload.entityType}],
        loadRestaurantData: true
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