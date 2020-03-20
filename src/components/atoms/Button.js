/**
 * Extends Flex styled components and using as polymorphic prop
 * and dynamically swaping the element type to button.
 */
import styled from 'styled-components';
import { buttonStyle } from 'styled-system';
import Flex from './Flex';

const Button = styled(Flex)`
  ${buttonStyle}
`;

Button.defaultProps = {
  variant: 'primary',
  as: 'button',
};

export default Button;
