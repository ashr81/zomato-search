import React from 'react';
import { Flex, Text } from '../atoms';
import { RadioOptions } from '../molecules';
import { SORTBY_OPTIONS, ORDERBY_OPTIONS } from '../../actions/restaurants';

const RestaurantFilter = ({
  onSortByChange, sortBy,
  onSortOrderChange, sortOrder
}) => {
  return (
    <Flex flexDirection={['row', 'column']} mx={[2, 0]} mt={2} width={['unset', '120px']}>
      <Flex my={[3, 1]} mr={3} flexDirection={['row',  'column']}>
        <Text fontSize={1} fontWeight='bold'>Order:</Text>
        <Text fontSize={1} textStyle='secondary' onClick={onSortOrderChange} data-selected={sortOrder === ORDERBY_OPTIONS.ASC} px={[2, 0]}>{ORDERBY_OPTIONS.ASC}</Text>
        <Text fontSize={1} display={['flex', 'none']}>|</Text>
        <Text fontSize={1} textStyle='secondary' onClick={onSortOrderChange} data-selected={sortOrder === ORDERBY_OPTIONS.DESC} px={[2, 0]}>{ORDERBY_OPTIONS.DESC}</Text>
      </Flex>
      <RadioOptions options={SORTBY_OPTIONS} onChange={onSortByChange} selectedOption={sortBy} name='Sort By:'/>
    </Flex>
  )
}

export default RestaurantFilter;