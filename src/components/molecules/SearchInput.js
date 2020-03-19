import React from 'react';
import styled from 'styled-components';
import { Flex, Input, Text } from '../atoms';

const FlexContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
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

const UnorderedList = styled(Flex).attrs(() => ({ as: 'ul', my: 0, px: 0, maxHeight: ['200px', '400px'] }))`
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  position: absolute;
  top: 60px;
  z-index: 4;
  background-color: ${({ theme: { colors }}) => colors.inputPrefixBg};
`

const ListElement = styled(Flex).attrs(() => ({ as: 'li' }))`
  cursor: pointer;
  &:hover {
    width: 100%;
    background-color: ${({ theme: { colors }}) => colors.primaryBtnBg};
    color: ${({ theme: { colors }}) => colors.primaryBtnColor};
  }
`

const SearchInput = ({
    selectedValue, onTextChange, onSelectOption,
    options, inputPrefix, value, CustomListElement, ...props
}) => {
  return (
    <FlexContainer m={4} {...props}>
      <FlexInputContainer mt={6} width='100%'>
        <InputPrefix px={2} mr={6} mt={3} fontWeight='bold' fontSize={1}>{inputPrefix}</InputPrefix>
        <Input px={0} pl={11} width='100%' onChange={onTextChange} value={value}/>
      </FlexInputContainer>
      <UnorderedList>
        {CustomListElement ? options.map((elem) => <CustomListElement key={elem.id} onSelectOption={onSelectOption} {...elem}/>) : options.map(elem => (
          <ListElement pl={11} py={3} pr={3} key={elem.id} data-id={elem.id} onClick={onSelectOption}>{elem.name}</ListElement>
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