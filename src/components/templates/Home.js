import React from 'react';
import { Flex, Text } from '../atoms';
import { ToggleSwitch, SearchInput } from '../molecules';
import { SEARCH_TYPES } from '../../actions/restaurants';
import LocationModal from '../organisms/LocationModal';
import RestaurantListElement from '../organisms/RestaurantListElement';
import RestaurantModal from '../organisms/RestaurantModal';

const Home = ({
  searchType, onSearchTypeChange, selectedLocation,
  onCitySearchTextChange, onPrimarySearchTextChange,
  selectedPrimarySearchValue, citySearchValue,
  primarySearchValue, citiesSearchCollection, onCitySelection,
  restaurants, onPrimarySearchSelect, selectedRestaurant,
  onCloseRestaurantModal, otherSearchOptions,
  onOthersSearchSelect, selectedOtherSearchValues
}) => {
  const isSearchTypeRestaurant = searchType === SEARCH_TYPES.RESTAURANT
  const searchTypePrefixText = isSearchTypeRestaurant ? 'Restaurants' : 'Cuisines, Category, Locality'
  return (
    <Flex flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
      <SearchInput
        selectedValue={selectedLocation}
        value={citySearchValue}
        onTextChange={onCitySearchTextChange}
        options={citiesSearchCollection}
        onSelectOption={onCitySelection}
      />
      <Flex flexDirection='column' flexGrow={2}>
        <SearchInput
          inputPrefix={searchTypePrefixText}
          selectedValue={isSearchTypeRestaurant ? selectedPrimarySearchValue : selectedOtherSearchValues}
          onTextChange={onPrimarySearchTextChange}
          value={primarySearchValue}
          options={isSearchTypeRestaurant ? restaurants : otherSearchOptions}
          onSelectOption={isSearchTypeRestaurant ? onPrimarySearchSelect : onOthersSearchSelect}
          CustomListElement={isSearchTypeRestaurant ? RestaurantListElement : null}
        />
        <Flex ml={4} alignItems='flex-end'>
          <ToggleSwitch uniqueId='checkbox-search-type' checked={!isSearchTypeRestaurant} onChange={onSearchTypeChange}/>
          <Text ml={2} fontSize={1} fontWeight='bold'>{`Change search to ${isSearchTypeRestaurant ? 'cuisines, category and locality' : 'restaurants'}`}</Text>
        </Flex>
      </Flex>
      {!selectedLocation.id ? <LocationModal open={true} /> : null}
      <RestaurantModal open={!!selectedRestaurant.id} onClose={onCloseRestaurantModal} restaurant={selectedRestaurant}/>
    </Flex>
  )
}

export default Home;