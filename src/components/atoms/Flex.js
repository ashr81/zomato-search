/**
 * Extends Box styled components with extra flexbox stylings
 */
import styled from 'styled-components';
import { flexbox } from 'styled-system';
import { Box } from '.';

const Flex = styled(Box)`
  ${flexbox}
  display: flex;
  box-sizing: border-box;
`

export default Flex;