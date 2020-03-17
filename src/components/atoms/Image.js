/**
 * Adds extra capabilities to html img tag.
 */
import styled from 'styled-components';
import { background, position, space } from 'styled-system';

const Image = styled.img`
  ${background}
  ${position}
  ${space}
`

export default Image;