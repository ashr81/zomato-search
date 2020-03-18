import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Flex, Button } from '../atoms';
import Portals from '../../helpers/portals';

const ModalOverlay = styled(Flex)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  opacity: 0.6;
  background-color: ${({ theme: { colors }}) => colors.modalOverlayBg};
`

const ModalContainer = styled(Flex)`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  flex-direction: column;
  background-color: ${({ theme: { colors }}) => colors.modalBg};
`
const Modal = ({
  open, children,
  onClose
}) => {
  return(<Portals>
    {open ? <Fragment>
      <ModalOverlay/>
      <ModalContainer width={['100%', '500px', '800px']}>
        {children}
        <Flex as='footer' justifyContent='flex-end'>
          <Button variant='danger' p={4} m={3}>Close</Button>
        </Flex>
      </ModalContainer>
    </Fragment> : null}
  </Portals>)
}

export default Modal;