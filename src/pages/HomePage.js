import React, { useReducer, useCallback } from 'react';
import Home from '../components/templates/Home';
import reducer, { initialState } from '../reducers/restaurants';
import { CHANGE_SEARCH_TYPE } from '../actions/restaurants';

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const onSearchTypeChange = useCallback(() => {
    dispatch({
      type: CHANGE_SEARCH_TYPE
    })
  }, [])

  return (
    <Home
      {...state}
      onSearchTypeChange={onSearchTypeChange}
    />
  )
}

export default HomePage;