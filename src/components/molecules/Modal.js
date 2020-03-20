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
  z-index: 10;
  background-color: ${({ theme: { colors } }) => colors.modalOverlayBg};
`;

const ModalContainer = styled(Flex)`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  flex-direction: column;
  z-index: 11;
  background-color: ${({ theme: { colors } }) => colors.modalBg};
`;
const Modal = ({
  open, children,
  onClose,
}) => (
  <Portals>
    {open ? (
      <>
        <ModalOverlay />
        <ModalContainer width={['100%', '500px', '800px']}>
          {children}
          {typeof (onClose) === 'function' ? (
            <Flex as="footer" justifyContent="flex-end">
              <Button variant="danger" p={4} m={4} cursor="pointer" onClick={onClose}>Close</Button>
            </Flex>
          ) : null}
        </ModalContainer>
      </>
    ) : null}
  </Portals>
);

export default Modal;
