import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Image } from '../atoms';

const ListElementContainer = styled(Flex).attrs(() => ({ as: 'li' }))`
  cursor: pointer;
  &:hover {
    width: 100%;
    background-color: ${({ theme: { colors }}) => colors.primaryBtnBg};
    color: ${({ theme: { colors }}) => colors.primaryBtnColor};
  }
`
const RestaurantListElement = ({
  name, thumb, cuisines, user_rating: rating,
  all_reviews_count: totalReviews, onSelectOption,
  ...props
}) => {
  return (
    <ListElementContainer p={3} data-id={props.id} onClick={onSelectOption}>
      <Image src={thumb} size={4}/>
      <Flex flexDirection='column' ml={3}>
        <Text as='h6' my={0} py={0} color='textDark'>{name}</Text>
        <Text my={0} py={0} fontSize={1} color='textDark'>{cuisines}</Text>
      </Flex>
      <Flex flexGrow={1} flexDirection='column' alignItems='flex-end'>
        <Text px={4} py={3}
          borderRadius={3}
          fontSize={2}
          backgroundColor={`#${rating.rating_color}`}
          color='white'
          fontWeight='bolder'
        >{rating.aggregate_rating}</Text>
        <Text fontSize={1} color='textDark'>{totalReviews} votes</Text>
      </Flex>
    </ListElementContainer>
  )
}

export default RestaurantListElement;