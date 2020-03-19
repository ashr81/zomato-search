import React from 'react';
import { Flex, Image, Text } from '../atoms';
import styled from 'styled-components';

const CarouselContainer = styled(Flex)`
  overflow-x: auto;
`

const ImageExtended = styled(Image)`
  background-size: cover;
`

const Carousel = ({
  images, width
}) => {
  const countOfImagesToShow = 3
  return (
    <CarouselContainer width='100%'>
      {images.slice(0, countOfImagesToShow).map((image, index) => <ImageExtended pr={3} key={index} size={width} src={image}/>)}
  {images.length > countOfImagesToShow ? <Text alignItems='center' color='danger'>+ {images.length - countOfImagesToShow} more</Text> : null}
    </CarouselContainer>
  )
}

export default Carousel;