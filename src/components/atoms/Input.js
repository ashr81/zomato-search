/**
 * Extends Flex styled components and using as polymorphic prop
 * and dynamically swaping the element type to input.
 */
import styled from 'styled-components';
import Flex from './Flex';

const Input = styled(Flex)`
  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

Input.defaultProps = {
  as: 'input',
  px: 4,
  py: 3,
  borderRadius: 3,
  borderColor: 'border',
  borderStyle: 'solid',
  borderWidth: '1px',
};

export default Input;
