import React from 'react';
import { Flex, Text, Image } from '../atoms';

const RestuarantGridView = ({
  name, thumb, location,
  timings, cuisines, currency,
  average_cost_for_two: averageCost,
  user_rating: rating,
  all_reviews_count: reviewsCount
}) => {
  return (
      <Flex backgroundColor='listCellBg' my={4}>
        <Image m={4} src={thumb} size={'100%', 6}/>
        <Flex flexGrow={1}>
          <Flex mt={4}>
            <Flex flexDirection='column' px={4}>
              <Text as='h3' fontWeight='bold' fontSize={6} color='danger' py={0} my={0}>{name}</Text>
              <Text fontSize={2}>{location.locality_verbose}</Text>
              <Flex alignItems='center'>
                <Text mr={2}>Open between: </Text>
                <Text fontSize={2}>{timings}</Text>
              </Flex>
              <Text fontSize={2}>{cuisines}</Text>
              <Flex alignItems='center'>
                <Text mr={2} as='h6' fontWeight='bold'>Average cost for two(approx).</Text>
                <Text fontSize={2}>{`${currency} ${averageCost}`}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexGrow={1} p={4} flexDirection='column' alignItems='flex-end'>
            <Text px={4} py={3}
              borderRadius={3}
              fontSize={2}
              backgroundColor={`#${rating.rating_color}`}
              color='white'
              fontWeight='bolder'
            >{rating.aggregate_rating}</Text>
            <Text fontSize={1}>{reviewsCount} votes</Text>
          </Flex>
        </Flex>
      </Flex>
  )
}

export default RestuarantGridView;