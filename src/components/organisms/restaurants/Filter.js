import React from 'react';
import { Flex, Text, Input } from '../../atoms';
import { RadioOptions } from '../../molecules';
import { SORTBY_OPTIONS, ORDERBY_OPTIONS } from '../../../actions/restaurants';

const RestaurantFilter = ({
  onSortByChange, sortBy,
  onSortOrderChange, sortOrder,
  filterByRating, onChangeFilterByRating
}) => {
  return (
    <Flex flexDirection={'column'} mx={[2, 0]} mt={2} width={['unset', '120px']}>
      <Flex>
        <Flex my={[3, 1]} mr={3} flexDirection={['row',  'column']}>
          <Text fontSize={1} fontWeight='bold'>Order:</Text>
          <Text fontSize={1} textStyle='secondary' onClick={onSortOrderChange} data-selected={sortOrder === ORDERBY_OPTIONS.ASC} px={[2, 0]}>{ORDERBY_OPTIONS.ASC}</Text>
          <Text fontSize={1} display={['flex', 'none']}>|</Text>
          <Text fontSize={1} textStyle='secondary' onClick={onSortOrderChange} data-selected={sortOrder === ORDERBY_OPTIONS.DESC} px={[2, 0]}>{ORDERBY_OPTIONS.DESC}</Text>
        </Flex>
        <RadioOptions options={SORTBY_OPTIONS} onChange={onSortByChange} selectedOption={sortBy} name='Sort By:'/>
      </Flex>
      <Text fontSize={1} fontWeight='bold'>Filter by rating: </Text>
      <Flex mr={[0, 4]}>
        <Input min='0' max='5' p={2} width={4} value={filterByRating[0]} data-index='0' onChange={onChangeFilterByRating} type='number'/>
        <Text mx={3} fontSize='bold'> - </Text>
        <Input min='0' max='5' p={2} width={4} value={filterByRating[1]} data-index='1' onChange={onChangeFilterByRating} type='number'/>
      </Flex>
    </Flex>
  )
}

export default RestaurantFilter;