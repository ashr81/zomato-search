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

const UnorderedList = styled(Flex).attrs(() => ({ as: 'ul', my: 0, px: 0 }))`
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme: { colors }}) => colors.inputPrefixBg};
`

const ListElement = styled(Flex).attrs(() => ({ as: 'li', p: 3 }))`
  cursor: pointer;
  &:hover {
    width: 100%;
    background-color: ${({ theme: { colors }}) => colors.primaryBtnBg};
    color: ${({ theme: { colors }}) => colors.primaryBtnColor};
  }
`

const SearchInput = ({
    selectedValue, onTextChange, onSelectOption,
    options, inputPrefix, value, ...props
}) => {
  return (
    <FlexContainer width={['95%', '90%']} m={4} {...props}>
      <FlexInputContainer mt={6} width='100%'>
        <InputPrefix px={2} mr={6} mt={3} fontWeight='bold' fontSize={1}>{inputPrefix}</InputPrefix>
        <Input px={0} pl={11} width='100%' onChange={onTextChange} value={value}/>
      </FlexInputContainer>
      <UnorderedList>
        {options.map(elem => (
          <ListElement key={elem.id} data-id={elem.id} onClick={onSelectOption}>{elem.name}</ListElement>
        ))}
      </UnorderedList>
    </FlexContainer>
  )
}

SearchInput.defaultProps = {
  options: [],
  inputPrefix: 'Select City'
}

export default SearchInput;