/**
 * Extends Flex styled components and using as polymorphic prop
 * and dynamically swaping the element type to input.
 */
import styled from 'styled-components';
import { Flex } from '.';

const Input = styled(Flex)``

Input.defaultProps = {
  as: 'input',
  px: 4,
  py: 3,
  borderRadius: 3,
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: '1px'
}

export default Input;