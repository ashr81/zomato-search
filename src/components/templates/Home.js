/**
 * Presentation component for `./pages/HomePage.js`
 */
import React, { memo } from 'react';
import { Flex, Text } from '../atoms';
import { ToggleSwitch, SearchInput } from '../molecules';
import { SEARCH_TYPES } from '../../actions/restaurants';
import { LocationModal } from '../organisms';
import {
  RestaurantsListElement, RestaurantsModal,
  RestaurantsGridView, RestaurantsFilter,
} from '../organisms/restaurants';
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
  restaurantsLoading, citySearchLoading, filterByRating,
  onChangeFilterByRating,
}) => {
  const isSearchTypeRestaurant = searchType === SEARCH_TYPES.RESTAURANT;
  const searchTypePrefixText = isSearchTypeRestaurant ? 'Restaurants' : 'Cuisines, Category, Locality';
  return (
    <>
      <Flex flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
        <SearchInput
          uniqueId='search-city'
          mr={[2, 4]}
          ml={[2, 0]}
          selectedValue={selectedLocation}
          value={citySearchValue}
          onTextChange={onCitySearchTextChange}
          options={citiesSearchCollection}
          onSelectOption={onCitySelection}
          isLoading={citySearchLoading}
        />
        <Flex flexDirection="column" flexGrow={2}>
          <SearchInput
            uniqueId='search-restaurants-cuisines-categories'
            ml={[2, 4]}
            mr={[2, 0]}
            helpText={isSearchTypeRestaurant ? null : '*Only locality is allowed.'}
            isLoading={isSearchTypeRestaurant && restaurantsLoading}
            inputPrefix={searchTypePrefixText}
            selectedValue={isSearchTypeRestaurant ? selectedPrimarySearchValue : selectedOtherSearchValues}
            onTextChange={onPrimarySearchTextChange}
            value={primarySearchValue}
            options={isSearchTypeRestaurant ? restaurants : otherSearchOptions}
            onSelectOption={isSearchTypeRestaurant ? onPrimarySearchSelect : onOthersSearchSelect}
            CustomListElement={isSearchTypeRestaurant ? RestaurantsListElement : null}
          />
          <Flex ml={[2, 4]} mt={4} alignItems="flex-end">
            <ToggleSwitch uniqueId="checkbox-search-type" checked={!isSearchTypeRestaurant} onChange={onSearchTypeChange} />
            <Text ml={2} fontSize={1}>{`Change search to ${isSearchTypeRestaurant ? 'cuisines, category and locality' : 'restaurants'}`}</Text>
          </Flex>
          <Flex ml={[2, 4]} mt={2}>
            <Text fontSize={1} mr={2} fontWeight="bold">Selected Cuisines, Categories: </Text>
            <Text fontSize={1}>{selectedOtherSearchValues.map((i) => i.name).join(', ')}</Text>
          </Flex>
        </Flex>
        {!selectedLocation.id ? <LocationModal open /> : null}
        <RestaurantsModal open={!!selectedRestaurant.id} onClose={onCloseRestaurantModal} restaurant={selectedRestaurant} />
      </Flex>
      <Flex flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
        <RestaurantsFilter
          sortOrder={sortOrder}
          sortBy={sortBy}
          filterByRating={filterByRating}
          onSortByChange={onSortByChange}
          onSortOrderChange={onSortOrderChange}
          onChangeFilterByRating={onChangeFilterByRating}
        />
        <Flex flexDirection="column">
          {isSearchTypeRestaurant ? null
            : (restaurantsLoading
              ? (
                <>
                  {[1, 2, 3].map((i) => <RestaurantsLoader key={i} />)}
                </>
              )
              : restaurants.map((restaurant) => <RestaurantsGridView onClick={onPrimarySearchSelect} key={restaurant.id} {...restaurant} />))}
        </Flex>
      </Flex>
    </>
  );
};

export default memo(Home);
