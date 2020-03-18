import React, { useReducer, useCallback } from 'react';
import Home from '../components/templates/Home';
import reducer, { initialState } from '../reducers/restaurants';
import { CHANGE_SEARCH_TYPE, CHANGE_CITY_SEARCH_TEXT, CHANGE_PRIMARY_SEARCH_TEXT, CHANGE_CITY_SEARCH_OPTIONS, SELECT_CITY } from '../actions/restaurants';
import { useLocationDetails, useDebouceThrottleFetchAPI } from '../custom-hooks';
import { API_CITIES } from '../routes/api';

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

  return (
    <Home
      {...state}
      selectedLocation={selectedLocation}
      onSearchTypeChange={onSearchTypeChange}
      onPrimarySearchTextChange={onPrimarySearchTextChange}
      onCitySearchTextChange={onCitySearchTextChange}
      onCitySelection={onCitySelection}
    />
  )
}

export default HomePage;