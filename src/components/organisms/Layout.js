/**
 * Initial layout with which provides alignment for other components.
 */
import React, { useState, useEffect } from 'react';
import { Flex } from '../atoms';
import { ToggleSwitch } from '../molecules';
import { nightColors, normalColors } from '../../themes';
import withErrorBoundaries  from '../../hocs/withErrorBoundaries';

const Layout = ({ children, changeTheme }) => {
  const [mode, updateMode] = useState('day')
  const onModeChange = () => {
    updateMode(mode === 'day' ? 'night' : 'day')
  }
  useEffect(() => {
    changeTheme((theme) => {
      return {
        ...theme,
        colors: mode === 'day' ? normalColors : nightColors
      };
    })
  }, [mode, changeTheme])

  return (
    <Flex flexDirection='column' backgroundColor='layoutBg' minHeight='100vh' alignItems='center' pt={[0, 6]}>
      <Flex width='100%' justifyContent='flex-end' mr={7} my={[5, 0]}>
        <ToggleSwitch
          checked={mode === 'night'}
          onChange={onModeChange}
          pseudoElementsContent={{before: '🌝', after: '🌜'}}
        />
      </Flex>
      {children}
    </Flex>
  )
}

export default withErrorBoundaries(Layout);