
/**
 * higher-order component which has locations data and uses the react context.api providers.
 * And initial state for the context providers which is consumed down the component.
 */
import React, { useState, useEffect } from 'react';
import { LocationDetailsContext } from '../contexts';

const LOCATION_DETAILS_LOCAL_STORAGE = 'LOCATION_DETAILS_LOCAL_STORAGE';
const withLocationDetails = (Component) => (props) => {
  const [selectedLocation, updateSelectedLocation] = useState({})

  useEffect(() => {
    const locationStore = window.localStorage.getItem(LOCATION_DETAILS_LOCAL_STORAGE)
    if(locationStore) {
      updateSelectedLocation(JSON.parse(locationStore))
    }
  }, [updateSelectedLocation])

  useEffect(() => {
    if(selectedLocation.name) {
      window.localStorage.setItem(LOCATION_DETAILS_LOCAL_STORAGE, JSON.stringify(selectedLocation))
    }
  }, [selectedLocation])
  return (
    <LocationDetailsContext.Provider value={{ selectedLocation, updateSelectedLocation }}>
      <Component {...props}/>
    </LocationDetailsContext.Provider>
  )
}

export default withLocationDetails;