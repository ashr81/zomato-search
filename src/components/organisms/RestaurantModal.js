import React from 'react';
import { Flex, Text, Image } from '../atoms';
import { Modal, Carousel } from '../molecules';

const RestaurantModal = ({
  open, onClose, restaurant
}) => {
  if(!open) return null
  const images = restaurant.photos ? Object.values(restaurant.photos).map(option => option.photo.url) : [];
  return (
    <Modal open={open} onClose={onClose}>
      <Flex>
        <Image mx={4} mt={4} src={restaurant.thumb} size={'100%', 7}/>
        <Flex flexDirection='column' flexGrow={1}>
          <Flex>
            <Flex mt={4}>
              <Flex flexDirection='column' px={4}>
                <Text as='h3' fontWeight='bold' fontSize={6} color='danger' py={0} my={0}>{restaurant.name}</Text>
                <Text fontSize={2}>{restaurant.location.locality_verbose}</Text>
                <Flex alignItems='center'>
                  <Text mr={2}>Open between: </Text>
                  <Text fontSize={2}>{restaurant.timings}</Text>
                </Flex>
                <Text fontSize={2}>{restaurant.cuisines}</Text>
                <Flex alignItems='center'>
                  <Text mr={2} as='h6' fontWeight='bold'>Average cost for two(approx).</Text>
                  <Text fontSize={2}>{`${restaurant.currency} ${restaurant.average_cost_for_two}`}</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexGrow={1} p={4} flexDirection='column' alignItems='flex-end'>
              <Text px={4} py={3}
                borderRadius={3}
                fontSize={2}
                backgroundColor={`#${restaurant.user_rating.rating_color}`}
                color='white'
                fontWeight='bolder'
              >{restaurant.user_rating.aggregate_rating}</Text>
              <Text fontSize={1}>{restaurant.all_reviews_count} votes</Text>
            </Flex>
          </Flex>
          <Flex mx={4} flexDirection='column'>
            <Text fontSize={2}>Photos by users:</Text>
            <Carousel width={4} images={images}/>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  )
}

export default RestaurantModal;