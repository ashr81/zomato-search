/**
 * Toggle switch which can be used in place of checkboxes.
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from '../atoms';

const ToggleSwitchContainer = styled(Flex)`
  position: relative;
  min-width: 50px;
  max-width: 50px;
  height: 24px;
  cursor: pointer;
  &:before {
    content: '${({ pseudoElementsContent }) => pseudoElementsContent.before}';
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 1;
    ${({ checked }) => checked === true && css`display: none;`}
  }
  &:after {
    content: '${({ pseudoElementsContent }) => pseudoElementsContent.after}';
    position: absolute;
    top: 0px;
    left: 0px;
    ${({ checked }) => checked === false && css`display: none;`}
  }
`

const ToggleSwitchLabel = styled.label`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0px;
  border-radius: 15px;
  background-color: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    z-index: 2;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

const CheckboxHidden = styled.input.attrs(() => ({ type: 'checkbox' }))`
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:checked + ${ToggleSwitchLabel} {
    background-color: ${({ theme: { colors }}) => colors.toggleSwitchBg};
    &:after {
      content: '';
      z-index: 2;
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 30px;
      transition: 0.2s;
    }
  }
`

const ToggleSwitch = ({
  checked, onChange, pseudoElementsContent
}) => {
  return (
    <ToggleSwitchContainer checked={checked} pseudoElementsContent={pseudoElementsContent}>
      <CheckboxHidden id='checkbox' checked={checked} onChange={onChange}/>
      <ToggleSwitchLabel htmlFor='checkbox'/>
    </ToggleSwitchContainer>
  )
}

ToggleSwitch.defaultProps = {
  pseudoElementsContent: {
    before: '',
    after: ''
  }
}

export default ToggleSwitch;