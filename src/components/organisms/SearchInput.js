import React from 'react';
import styled from 'styled-components';
import { Flex, Input, Text } from '../atoms';

const FlexContainer = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`

const FlexInputContainer = styled(Flex)`
  position: relative;
`

const InputPrefix = styled(Text)`
  position: absolute;
  left: 8px;
  z-index: 1;
  background-color: ${({ theme: { colors }}) => colors.inputPrefixBg};
`

const UnorderedList = styled(Flex).attrs(() => ({ as: 'ul' }))`

`

const SearchInput = ({
    selectedValue, onTextChange, textValue,
    collections, inputPrefix, ...props
}) => {
  return (
    <FlexContainer {...props}>
      <FlexInputContainer width={['95%', '90%']} mb={4} mt={6}>
        <InputPrefix px={2} mr={6} mt={3} fontWeight='bold' fontSize={1}>{inputPrefix}</InputPrefix>
        <Input px={0} pl={11} width='100%' onChange={onTextChange} value={textValue}/>
      </FlexInputContainer>
      <UnorderedList>
        {collections.map(elem => (
          <Flex as='li' key={elem.id} data-id={elem.id}></Flex>
        ))}
      </UnorderedList>
    </FlexContainer>
  )
}

SearchInput.defaultProps = {
  collections: [],
  inputPrefix: 'Select City'
}

export default SearchInput;