/**
 * Bare minimum component that holds functionalities through props
 * picks space, color, fonts objects from theme/indext.tsx; and renders
 * under the ThemeProvider context provided by styled-components.
 */
import styled, { css } from 'styled-components';
import {
  background, color, border, layout, position, space, typography, fontStyle, colorStyle,
} from 'styled-system';

const Box = styled.div`
  ${space}
  ${background}
  ${color}
  ${border}
  ${layout}
  ${position}
  ${typography}
  ${fontStyle}
  ${colorStyle}
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `}
`;

export default Box;
