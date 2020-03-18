import { useContext } from 'react';
import { LocationDetailsContext } from '../contexts';

const useLocationDetails = () => {
  const { selectedLocation, updateSelectedLocation } = useContext(LocationDetailsContext);

  return {
    selectedLocation, updateSelectedLocation
  }
}

export default useLocationDetails;