/**
 * Extends Flex styled components and using as polymorphic prop
 * and dynamically swaping the element type to p, h1-h6.
 */
import styled, { css } from 'styled-components';
import { typography, fontSize, textStyle } from 'styled-system';
import Flex from './Flex';

const Text = styled(Flex)`
  ${typography}
  ${fontSize}
  ${textStyle}
  ${({ textTransform }) => textTransform && css`
    text-transform: ${textTransform}
  `}
  ${({ cursor }) => cursor && css`
    cursor: ${cursor}
  `}
`;

Text.defaultProps = {
  fontSize: 3,
  as: 'p',
  my: 0,
  py: 0,
  color: 'textColor',
};

export default Text;
