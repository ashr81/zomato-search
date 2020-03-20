import React, { Fragment, memo } from 'react';
import { Flex, Text } from '../atoms';
import { ToggleSwitch, SearchInput, RadioOptions } from '../molecules';
import { SEARCH_TYPES, SORTBY_OPTIONS, ORDERBY_OPTIONS } from '../../actions/restaurants';
import LocationModal from '../organisms/LocationModal';
import RestaurantListElement from '../organisms/RestaurantListElement';
import RestaurantModal from '../organisms/RestaurantModal';
import RestaurantGridView from '../organisms/RestaurantGridView';
import RestaurantsLoader from '../../content-loaders/RestaurantsLoader';

const Home = ({
  searchType, onSearchTypeChange, selectedLocation,
  onCitySearchTextChange, onPrimarySearchTextChange,
  selectedPrimarySearchValue, citySearchValue,
  primarySearchValue, citiesSearchCollection, onCitySelection,
  restaurants, onPrimarySearchSelect, selectedRestaurant,
  onCloseRestaurantModal, otherSearchOptions,
  onOthersSearchSelect, selectedOtherSearchValues,
  sortBy, sortOrder, onSortByChange, onSortOrderChange,
  restaurantsLoading, citySearchLoading
}) => {
  const isSearchTypeRestaurant = searchType === SEARCH_TYPES.RESTAURANT
  const searchTypePrefixText = isSearchTypeRestaurant ? 'Restaurants' : 'Cuisines, Category, Locality'
  return (
    <Fragment>
      <Flex flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
        <SearchInput
          mr={4}
          selectedValue={selectedLocation}
          value={citySearchValue}
          onTextChange={onCitySearchTextChange}
          options={citiesSearchCollection}
          onSelectOption={onCitySelection}
          isLoading={citySearchLoading}
        />
        <Flex flexDirection='column' flexGrow={2}>
          <SearchInput
            ml={4}
            isLoading={isSearchTypeRestaurant && restaurantsLoading}
            inputPrefix={searchTypePrefixText}
            selectedValue={isSearchTypeRestaurant ? selectedPrimarySearchValue : selectedOtherSearchValues}
            onTextChange={onPrimarySearchTextChange}
            value={primarySearchValue}
            options={isSearchTypeRestaurant ? restaurants : otherSearchOptions}
            onSelectOption={isSearchTypeRestaurant ? onPrimarySearchSelect : onOthersSearchSelect}
            CustomListElement={isSearchTypeRestaurant ? RestaurantListElement : null}
          />
          <Flex ml={4} mt={4} alignItems='flex-end'>
            <ToggleSwitch uniqueId='checkbox-search-type' checked={!isSearchTypeRestaurant} onChange={onSearchTypeChange}/>
            <Text ml={2} fontSize={1} fontWeight='bold'>{`Change search to ${isSearchTypeRestaurant ? 'cuisines, category and locality' : 'restaurants'}`}</Text>
          </Flex>
        </Flex>
        {!selectedLocation.id ? <LocationModal open={true} /> : null}
        <RestaurantModal open={!!selectedRestaurant.id} onClose={onCloseRestaurantModal} restaurant={selectedRestaurant}/>
      </Flex>
      <Flex flexWrap='wrap' flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
        <Flex flexDirection='column'>
          <Flex my={3}>
            Order:
            <Text textStyle='secondary' onClick={onSortOrderChange} data-selected={sortOrder === ORDERBY_OPTIONS.ASC} px={2}>{ORDERBY_OPTIONS.ASC}</Text>|
            <Text textStyle='secondary' onClick={onSortOrderChange} data-selected={sortOrder === ORDERBY_OPTIONS.DESC} px={2}>{ORDERBY_OPTIONS.DESC}</Text>
          </Flex>
          <RadioOptions options={SORTBY_OPTIONS} onChange={onSortByChange} selectedOption={sortBy} name='Sort By:'/>
        </Flex>
        <Flex flexDirection='column'>
          {isSearchTypeRestaurant ? null :
            (restaurantsLoading ? <RestaurantsLoader /> : restaurants.map(restaurant => <RestaurantGridView key={restaurant.id} {...restaurant}/>))}
        </Flex>
      </Flex>
    </Fragment>
  )
}

export default memo(Home);