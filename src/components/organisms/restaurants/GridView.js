/**
 * Responsive view for the individual restaurant.
 */
import React from 'react';
import { Flex, Text, Image } from '../../atoms';

const RestuarantGridView = ({
  name, thumb, location, id,
  timings, cuisines, currency,
  average_cost_for_two: averageCost,
  user_rating: rating, onClick,
  all_reviews_count: reviewsCount,
}) => (
  <Flex cursor="pointer" backgroundColor="listCellBg" data-id={id} onClick={onClick} my={4} mx={[2, 2, 0]} py={4} px={2} alignItems={['center', 'center', 'unset']} flexDirection={['column', 'column', 'row']}>
    <Image m={2} src={thumb} size={6} alt={name}/>
    <Flex flexGrow={1}>
      <Flex flexDirection="column" px={4} mt={[1, 1, 4]}>
        <Text as="h3" fontWeight="bold" fontSize={[3, 3, 6]} color="danger" py={0} my={0}>{name}</Text>
        <Text fontSize={2}>{location.locality_verbose}</Text>
        <Flex alignItems="center">
          <Text mr={2}>Open between: </Text>
          <Text fontSize={2}>{timings}</Text>
        </Flex>
        <Text fontSize={2}>{cuisines}</Text>
        <Flex alignItems="center">
          <Text mr={2} as="h6" my={[2, 2, 4]} fontWeight="bold" fontSize={[2, 2, 3]}>Average cost for two(approx).</Text>
          <Text fontSize={2}>{`${currency} ${averageCost}`}</Text>
        </Flex>
      </Flex>
      <Flex flexGrow={1} p={4} flexDirection="column" alignItems="flex-end">
        <Text
          px={4}
          py={3}
          borderRadius={3}
          fontSize={2}
          backgroundColor={`#${rating.rating_color}`}
          color="white"
          fontWeight="bolder"
        >
          {rating.aggregate_rating}
        </Text>
        <Text fontSize={1} textAlign="center">
          {reviewsCount}
          {' '}
          votes
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default RestuarantGridView;
