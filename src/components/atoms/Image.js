/**
 * Adds extra capabilities to html img tag.
 */
import styled from 'styled-components';
import {
  background, position, space, size,
} from 'styled-system';

const Image = styled.img`
  ${background}
  ${position}
  ${space}
  ${size}
`;

export default Image;
