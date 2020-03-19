import React, { useReducer, useCallback } from 'react';
import Home from '../components/templates/Home';
import reducer, { initialState } from '../reducers/restaurants';
import {
  CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT, CHANGE_PRIMARY_SEARCH_TEXT,
  CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY, ADD_RESTAURANTS, SEARCH_TYPES,
  SELECT_RESTAURANT, CLOSE_RESTAURANT_MODAL
} from '../actions/restaurants';
import { useLocationDetails, useDebouceThrottleFetchAPI } from '../custom-hooks';
import { API_CITIES, API_SEARCH } from '../routes/api';

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
  }, [])

  const onCitySearchTextChange = useCallback((event) => {
    dispatch({
      type: CHANGE_CITY_SEARCH_TEXT,
      value: event.currentTarget.value
    })
  }, [])

  const onPrimarySearchTextChange = useCallback((event) => {
    dispatch({
      type: CHANGE_PRIMARY_SEARCH_TEXT,
      value: event.currentTarget.value
    })
  }, [])

  const onCitySelection = (event) => {
    const cityId = parseInt(event.currentTarget.dataset.id)
    updateSelectedLocation(state.citiesSearchCollection.filter(city => city.id === cityId)[0])
    dispatch({
      type: SELECT_CITY,
      cityId
    })
  }

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

  const onPrimarySearchSelect = (event) => {
    dispatch({
      type: SELECT_RESTAURANT,
      restaurantId: event.currentTarget.dataset.id
    })
  }

  const onCloseRestaurantModal = () => {
    dispatch({
      type: CLOSE_RESTAURANT_MODAL
    })
  }
   
  // No API call required when search_type is others.
  useDebouceThrottleFetchAPI(
    state.loadRestaurantData ? state.primarySearchValue : false,
    {
      url: API_SEARCH,
      params: {
        q: state.primarySearchValue
      }
    },
    (response) => {
      if(response.config.params.q === state.primarySearchValue) {
        dispatch({
          type: ADD_RESTAURANTS,
          data: response.data
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
    />
  )
}

export default HomePage;