import React, { Fragment } from 'react';
import { Flex } from '../atoms';
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
  onCloseRestaurantModal
}) => {
  const isSearchTypeRestaurant = searchType === SEARCH_TYPES.RESTAURANT
  const searchTypePrefixText = isSearchTypeRestaurant ? 'Restaurants' : 'Cuisines, Category, Locality'
  if(!selectedLocation.name) return (<LocationModal />)
  return (
    <Flex flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
      <SearchInput
        flexGrow={1}
        selectedValue={selectedLocation}
        value={citySearchValue}
        onTextChange={onCitySearchTextChange}
        options={citiesSearchCollection}
        onSelectOption={onCitySelection}
      />
      <Flex flexDirection='column' flexGrow={2}>
        <SearchInput
          inputPrefix={searchTypePrefixText}
          selectedValue={selectedPrimarySearchValue}
          onTextChange={onPrimarySearchTextChange}
          value={primarySearchValue}
          options={restaurants}
          onSelectOption={onPrimarySearchSelect}
          CustomListElement={isSearchTypeRestaurant ? RestaurantListElement : null}
        />
        <ToggleSwitch checked={searchType !== SEARCH_TYPES.RESTAURANT} onChange={onSearchTypeChange}/>
      </Flex>
      <RestaurantModal open={!!selectedRestaurant.id} onClose={onCloseRestaurantModal} restaurant={selectedRestaurant}/>
    </Flex>
  )
}

export default Home;