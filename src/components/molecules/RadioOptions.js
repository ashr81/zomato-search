/**
 * Helps in selection of single input.
 * used in sortBy, sortOrder selection.
 */
import React from 'react';
import { Flex, Text } from '../atoms';

const RadioOptions = ({
  options, selectedOption, name, onChange: onClick,
}) => (
  <Flex flexDirection={['row', 'column']} my={[1, 3]} alignItems={['center', 'unset']}>
    <Text fontSize={1} fontWeight="bold">{name}</Text>
    {
        options.map((option, index) => (
          <Text key={index} fontSize={1} textStyle="secondary" px={[2, 0]} onClick={onClick} data-selected={selectedOption === option}>{option}</Text>
        ))
      }
  </Flex>
);

export default RadioOptions;
