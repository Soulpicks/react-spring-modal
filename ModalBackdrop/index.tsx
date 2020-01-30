import React, { forwardRef, useCallback } from 'react';
import { animated } from 'react-spring';
import './style.css';

function ModalBackdrop({ className, onClick, ...props }: any, ref: any) {
  const handleClick = useCallback(
    event => {
      if (ref.current === event.target) {
        onClick(event);
      }
    },
    [onClick, ref]
  );

  return (
    <animated.div
      ref={ref}
      onClick={handleClick}
      className={['ModalBackdrop', className].join(' ')}
      {...props}
    />
  );
}

export default forwardRef(ModalBackdrop);
