
/**
 * higher-order component which has locations data and uses the react context.api providers.
 * And initial state for the context providers which is consumed down the component.
 */
import React, { useState } from 'react';
import { LocationDetailsContext } from '../contexts';

const withLocationDetails = (Component) => (props) => {
  const [selectedLocation, updateSelectedLocation] = useState('')
  return (
    <LocationDetailsContext.Provider value={{ selectedLocation, updateSelectedLocation }}>
      <Component {...props}/>
    </LocationDetailsContext.Provider>
  )
}

export default withLocationDetails;