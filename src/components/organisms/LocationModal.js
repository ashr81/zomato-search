import React, { useState, useEffect, useCallback } from 'react';
import { useLocationDetails, useFetchAPI, useDebouceThrottleFetchAPI } from '../../custom-hooks';
import { Modal, SearchInput } from '../molecules';
import { Flex, Button, Text } from '../atoms';
import { API_CITIES } from '../../routes/api';

const LocationModal = () => {
  const { selectedLocation, updateSelectedLocation } = useLocationDetails();
  const [locationCoordinates, updateLocationCoordinates] = useState(selectedLocation);
  const [locationInput, updateLocationInput] = useState('');
  const [loadingOptions, updateLoadingOptions] = useState(false);
  const [options, updateOptions] = useState([]);
  const [locationError, updateLocationError] = useState('')

  useFetchAPI(!!locationCoordinates.latitude, {
    url: API_CITIES,
    params: {
      lat: locationCoordinates.latitude,
      lon: locationCoordinates.longitude,
    },
  }, (response) => {
    if (response?.data?.location_suggestions?.length) {
      updateLocationInput(response.data.location_suggestions[0].name);
      updateSelectedLocation(response.data.location_suggestions[0]);
    }
  }, (error) => {
    updateLocationError(error?.response?.data?.message || error.message)
  });

  const onClickFetchLocation = () => {
    window.navigator.geolocation.getCurrentPosition((location) => {
      updateLocationCoordinates(location.coords);
    }, (error) => {
      updateLocationError(error.message)
    });
  }

  useEffect(() => {
    if (locationInput) updateLoadingOptions(true);
  }, [locationInput]);

  const onTextChange = useCallback((event) => {
    updateLocationInput(event.currentTarget.value);
  }, [updateLocationInput]);

  useDebouceThrottleFetchAPI(
    locationInput ? locationInput : false,
    {
      url: API_CITIES,
      params: {
        q: locationInput,
      },
    },
    (response) => {
      if (response.config.params.q === locationInput) {
        updateOptions(response.data.location_suggestions);
        updateLoadingOptions(false);
      }
    },
    (error) => {
      updateLoadingOptions(false);
      updateLocationError(error?.response?.data?.message || error.message)
    },
  );

  const onSelectOption = (event) => {
    const cityId = parseInt(event.currentTarget.dataset.id);
    updateSelectedLocation(options.filter((city) => city.id === cityId)[0]);
  };

  return (
    <Modal open={!selectedLocation.id}>
      <Flex flexDirection='column'>
        <SearchInput
          width="100%"
          mb={4}
          px={4}
          isLoading={loadingOptions}
          selectedValue={selectedLocation}
          onTextChange={onTextChange}
          value={locationInput}
          options={options}
          onSelectOption={onSelectOption}
        />
        <Flex justifyContent='flex-end' alignItems='flex-start'>
          <Text m={0} p={0} color='danger' fontSize={1} mr={3}>{locationError}</Text>
          <Button alignSelf='flex-end' cursor='pointer' onClick={onClickFetchLocation} mb={4} mr={4} p={3}>Fetch Location</Button>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default LocationModal;
