import React from 'react';
import styled from 'styled-components';
import { locationBackgroundScreen } from '../../assets/images';
import { Image } from '../atoms';

const BlurredImage = styled(Image)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  filter: blur(6px);
  z-index: 3;
`

const LocationSearchBackground = () => {
  return (
    <BlurredImage src={locationBackgroundScreen} width='100vw' height='100vh'/>
  )
}

export default LocationSearchBackground;