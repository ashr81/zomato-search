import React, { useReducer, useCallback } from 'react';
import Home from '../components/templates/Home';
import reducer, { initialState } from '../reducers/restaurants';
import {
  CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT, CHANGE_PRIMARY_SEARCH_TEXT,
  CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY, ADD_RESTAURANTS, SELECT_RESTAURANT,
  CLOSE_RESTAURANT_MODAL, ADD_OTHER_SEARCH_OPTIONS, SELECT_OTHER_SEARCH,
  ENTITY_CUISINES, ENTITY_CATEGORIES, CHANGE_SORTBY_OPTION, CHANGE_SORT_ORDER
} from '../actions/restaurants';
import { useLocationDetails, useDebouceThrottleFetchAPI, useFetchAPI } from '../custom-hooks';
import { API_CITIES, API_SEARCH, API_CATEGORIES, API_CUISINES } from '../routes/api';

const HomePage = () => {
  const { selectedLocation, updateSelectedLocation } = useLocationDetails()
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    citySearchValue: selectedLocation.name
  })

  const onSearchTypeChange = useCallback(() => {
    dispatch({
      type: CHANGE_SEARCH_TYPE
    })
  }, [dispatch])

  const onCitySearchTextChange = useCallback((event) => {
    dispatch({
      type: CHANGE_CITY_SEARCH_TEXT,
      value: event.currentTarget.value
    })
  }, [dispatch])

  const onPrimarySearchTextChange = useCallback((event) => {
    dispatch({
      type: CHANGE_PRIMARY_SEARCH_TEXT,
      value: event.currentTarget.value
    })
  }, [dispatch])

  const onCitySelection = useCallback((event) => {
    const cityId = parseInt(event.currentTarget.dataset.id)
    updateSelectedLocation(state.citiesSearchCollection.filter(city => city.id === cityId)[0])
    dispatch({
      type: SELECT_CITY,
      cityId
    })
  }, [dispatch, updateSelectedLocation, state.citiesSearchCollection])

  const onPrimarySearchSelect = useCallback((event) => {
    dispatch({
      type: SELECT_RESTAURANT,
      restaurantId: event.currentTarget.dataset.id
    })
  }, [dispatch])

  const onOthersSearchSelect = useCallback((event) => {
    dispatch({
      type: SELECT_OTHER_SEARCH,
      entityId: event.currentTarget.dataset.id,
      entityType: event.currentTarget.dataset.type
    })
  }, [dispatch])

  const onCloseRestaurantModal = useCallback(() => {
    dispatch({
      type: CLOSE_RESTAURANT_MODAL
    })
  }, [dispatch])

  const onSortOrderChange = useCallback((event) => {
    dispatch({
      type: CHANGE_SORT_ORDER,
      sortOrder: event.currentTarget.textContent
    })
  }, [dispatch])

  const onSortByChange = useCallback((event) => {
    dispatch({
      type: CHANGE_SORTBY_OPTION,
      sortBy: event.currentTarget.textContent
    })
  }, [dispatch])

  useFetchAPI(
    selectedLocation.id,
    [
      {url: API_CATEGORIES},
      {url: API_CUISINES, params: { city_id: selectedLocation.id }}
    ],
    (response) => {
      dispatch({
        type: ADD_OTHER_SEARCH_OPTIONS,
        categories: response[0],
        cuisines: response[1]
      })
    }
  )
   
  // No API call required when search_type is others.
  useDebouceThrottleFetchAPI(
    state.restaurantsLoading ? state.primarySearchValue || state.selectedOtherSearchValues.length : false,
    {
      url: API_SEARCH,
      params: {
        q: state.primarySearchValue,
        entity_id: selectedLocation.id,
        entity_type: 'city',
        cuisines: state.selectedOtherSearchValues.filter(value => value.type === ENTITY_CUISINES).map(value => value.id).join(','),
        category: state.selectedOtherSearchValues.filter(value => value.type === ENTITY_CATEGORIES).map(value => value.id).join(','),
        sort: state.sortBy,
        order: state.sortOrder
      }
    },
    (response) => {
      if(response.config.params.q === state.primarySearchValue) {
        dispatch({
          type: ADD_RESTAURANTS,
          data: response.data
        })
      }
    },
    () => {
      dispatch({
        restaurantsLoading: false
      }) 
    }
  )

  useDebouceThrottleFetchAPI(
    state.citySearchLoading ? state.citySearchValue : false,
    {
      url: API_CITIES,
      params: {
        q: state.citySearchValue
      }
    },
    (response) => {
      if(response.config.params.q === state.citySearchValue) {
        dispatch({
          type: CHANGE_CITY_SEARCH_OPTIONS,
          options: response.data.location_suggestions
        })
      }
    }
  )

  return (
    <Home
      {...state}
      selectedLocation={selectedLocation}
      onSearchTypeChange={onSearchTypeChange}
      onPrimarySearchTextChange={onPrimarySearchTextChange}
      onCitySearchTextChange={onCitySearchTextChange}
      onCitySelection={onCitySelection}
      onPrimarySearchSelect={onPrimarySearchSelect}
      onCloseRestaurantModal={onCloseRestaurantModal}
      onOthersSearchSelect={onOthersSearchSelect}
      onSortOrderChange={onSortOrderChange}
      onSortByChange={onSortByChange}
    />
  )
}

export default HomePage;