/**
 * Page when user navigated to a page that doesn't exist in the app.
 */
import React from 'react';
import { Flex } from '../../components/atoms';

const NotFoundPage = () => {
  return (
    <Flex width='100vw' flexDirection='column' justifyContent='center' alignItems='center' color='textColor'>
      <Flex>Page Not Found</Flex>
    </Flex>
  )
}

export default NotFoundPage;