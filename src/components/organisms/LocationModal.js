import React, { useState, useEffect, useCallback } from 'react';
import { useLocationDetails, useFetchAPI, useDebouceThrottleFetchAPI } from '../../custom-hooks';
import { Modal, SearchInput } from '../molecules';
import { Flex } from '../atoms';
import { API_CITIES } from '../../routes/api';

const LocationModal = () => {
  const { selectedLocation, updateSelectedLocation } = useLocationDetails();
  const [locationCoordinates, updateLocationCoordinates] = useState(selectedLocation);
  const [locationInput, updateLocationInput] = useState('');
  const [loadingOptions, updateLoadingOptions] = useState(false);
  const [options, updateOptions] = useState([]);

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
  });

  useEffect(() => {
    if (!selectedLocation.id) {
      window.navigator.geolocation.getCurrentPosition((location) => {
        updateLocationCoordinates(location.coords);
      });
    }
  }, [selectedLocation.id, updateLocationCoordinates]);

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
    () => {
      updateLoadingOptions(false);
    },
  );

  const onSelectOption = (event) => {
    const cityId = parseInt(event.currentTarget.dataset.id);
    updateSelectedLocation(options.filter((city) => city.id === cityId)[0]);
  };

  return (
    <Modal open={!selectedLocation.id}>
      <Flex>
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
      </Flex>
    </Modal>
  );
};

export default LocationModal;
