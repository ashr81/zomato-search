/**
 * Acts as Fallback Component within error boundaries.
 * When UI breaks this component is rendered from withErrorBoundary component.
 */
import React from 'react';
import { Flex } from '../../components/atoms';

const SomethingWentWrongPage = () => {
  return (
    <Flex width='100vw' flexDirection='column' justifyContent='center' alignItems='center'>
      SomeThing unexpected happened, it's not your fault
    </Flex>
  )
}

export default SomethingWentWrongPage;