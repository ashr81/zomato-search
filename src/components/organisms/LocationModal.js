import React, { useState, useEffect, useCallback } from 'react';
import { useLocationDetails, useFetchAPI } from '../../custom-hooks';
import { Modal } from '../molecules';
import { Flex } from '../atoms';
import { API_CITIES } from '../../routes/api';
import SearchInput from '../organisms/SearchInput';

const LocationModal = () => {
  const { selectedLocation, updateSelectedLocation } = useLocationDetails();
  const [locationCoordinates, updateLocationCoordinates] = useState(selectedLocation)
  const [locationInput, updateLocationInput] = useState('')
  
  useFetchAPI(!!locationCoordinates.latitude, {
    url: API_CITIES,
    params: {
      lat: locationCoordinates.latitude,
      lon: locationCoordinates.longitude
    }
  }, (response) => {
    if(response?.data?.location_suggestions?.length) {
      updateLocationInput(response.data.location_suggestions[0].name)
      updateSelectedLocation(response.data.location_suggestions[0])
    }
  })

  useEffect(() => {
    if(!selectedLocation.id) {
      window.navigator.geolocation.getCurrentPosition((location) => {
        updateLocationCoordinates(location.coords)
      })
    }
  }, [selectedLocation.id, updateLocationCoordinates])

  const onTextChange = useCallback((event) => {
    updateLocationInput(event.currentTarget.value)
  }, [updateLocationInput])

  return (
    <Modal open={!selectedLocation}>
      <Flex>
        <SearchInput selectedValue={locationInput} onTextChange={onTextChange}/>
      </Flex>
    </Modal>
  )
}

export default LocationModal;