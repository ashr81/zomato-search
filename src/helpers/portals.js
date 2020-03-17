import { useRef } from 'react';
import { createPortal } from 'react-dom';

const Portals = ({ children }) => {
  const modalNodeRef = useRef(document.getElementById('modal-root'))

  if(!modalNodeRef.current) {
    return null;
  }
  return (
    createPortal(
      children,
      modalNodeRef.current
    )
  )
}

export default Portals;