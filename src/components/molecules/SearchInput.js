/**
 * Search input with a dropdown and loading state.
 * contains a prefix input for the input box.
 * dropdown is closed on click of outside the
 * searchbox and dropdown.
 */

import React, {
  Fragment, useState, useRef, useEffect,
} from 'react';
import styled, { css } from 'styled-components';
import { Flex, Input, Text } from '../atoms';
import SearchListLoader from '../../content-loaders/SearchListLoader';

const FlexContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FlexInputContainer = styled(Flex)`
  position: relative;
`;

const InputPrefix = styled(Text)`
  position: absolute;
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80px;
  left: 8px;
  z-index: 1;
  background-color: ${({ theme: { colors } }) => colors.inputPrefixBg};
`;

const UnorderedList = styled(Flex).attrs(() => ({
  as: 'ul', my: 0, px: 0, maxHeight: ['200px', '400px'],
}))`
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  position: absolute;
  top: 60px;
  z-index: 4;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  background-color: ${({ theme: { colors } }) => colors.inputPrefixBg};
`;

const ListElement = styled(Flex).attrs(() => ({ as: 'li' }))`
  cursor: pointer;
  ${({ selected }) => selected && css`
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.primaryBtnBg};
    color: ${({ theme: { colors } }) => colors.primaryBtnColor};
  `}
  &:hover {
    width: 100%;
    background-color: ${({ theme: { colors }, selected }) => (selected ? colors.border : colors.primaryBtnBg)};
    color: ${({ theme: { colors }, selected }) => (selected ? colors.textColor : colors.primaryBtnColor)};
  }
`;

const HelpText = styled(Text)`
  position: absolute;
  top: -14px;
  right: 0px;
`;

const SearchInput = ({
  selectedValue, onTextChange, onSelectOption, isLoading, uniqueId,
  options, inputPrefix, value, CustomListElement, helpText, ...props
}) => {
  const [dropdownOpen, updateDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (event) => {
      // checks whether the event targt is present inside the main container.
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        updateDropdownOpen(false);
      }
    };
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, [containerRef, updateDropdownOpen]);
  return (
    <FlexContainer ref={containerRef} {...props} onClick={() => updateDropdownOpen(true)}>
      <FlexInputContainer mt={6} width="100%">
        <HelpText fontSize={1}>{helpText}</HelpText>
        <InputPrefix px={2} my={3} as='label' htmlFor={uniqueId} color="unset" fontWeight="bold" fontSize={1} title={inputPrefix}>{inputPrefix}</InputPrefix>
        <Input px={0} pl={11} id={uniqueId} width="100%" onChange={onTextChange} value={value} />
      </FlexInputContainer>
      <UnorderedList open={dropdownOpen}>
        {isLoading
          ? <Flex flexDirection="column">{[1, 2, 3].map((i) => <SearchListLoader key={i} />)}</Flex>
          : (CustomListElement ? options.map((elem) => <CustomListElement key={elem.id} onSelectOption={onSelectOption} {...elem} />)
            : (Array.isArray(options) ? options.map((elem) => (
              <ListElement pl={11} py={3} pr={3} key={elem.id} data-id={elem.id} onClick={onSelectOption}>{elem.name}</ListElement>
            )) : Object.keys(options).map((optionType, index) => (
              <Fragment key={index}>
                <Text backgroundColor="layoutBg" pl={10} py={3} textTransform="capitalize" fontWeight="bold" fontSize={3}>{optionType}</Text>
                {options[optionType].map((elem) => {
                  const selected = selectedValue.some((value) => value.id === elem.id && value.type === optionType);
                  return <ListElement pl={11} py={3} pr={3} key={elem.id} data-name={elem.name} selected={selected} data-type={optionType} data-id={elem.id} onClick={onSelectOption}>{elem.name}</ListElement>;
                })}
              </Fragment>
            ))))}
      </UnorderedList>
    </FlexContainer>
  );
};

SearchInput.defaultProps = {
  options: [],
  inputPrefix: 'Select City',
};

export default SearchInput;
