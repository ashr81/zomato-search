import React, { Fragment } from 'react';
import { Flex } from '../atoms';
import { ToggleSwitch } from '../molecules';
import { SEARCH_TYPES } from '../../actions/restaurants';
import LocationModal from '../organisms/LocationModal';
import SearchInput from '../organisms/SearchInput';

const Home = ({
  searchType, onSearchTypeChange
}) => {
  const searchTypePrefixText = searchType === SEARCH_TYPES.RESTAURANT ? 'Restaurants' : 'Cuisines, Category, Locality'
  return (
    <Fragment>
      <Flex flexDirection={['column', 'row']} width={['100%', '500px', '800px']}>
        <SearchInput />
        <Flex flexDirection='column'>
          <SearchInput inputPrefix={searchTypePrefixText}/>
          <ToggleSwitch checked={searchType !== SEARCH_TYPES.RESTAURANT} onChange={onSearchTypeChange}/>
        </Flex>
      </Flex>
      <LocationModal />
    </Fragment>
  )
}

export default Home;