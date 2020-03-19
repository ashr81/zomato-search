import React from 'react';
import { Flex, Text } from '../atoms';

const RadioOptions = ({ options, selectedOption, name, onChange: onClick }) => {
  return (
    <Flex flexDirection='column'>
      <Text>{name}</Text>
      {
        options.map((option, index) => (
          <Text key={index} textStyle='secondary' onClick={onClick} data-selected={selectedOption === option}>{option}</Text>
        ))
      }
    </Flex>
  )
}

export default RadioOptions;