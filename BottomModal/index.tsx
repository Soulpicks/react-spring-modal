import React from 'react';
import { animated, useTransition } from 'react-spring';
import BaseModal, { IBaseModalProps } from '../BaseModal';

import { ObjectOf } from '../generic-types';
import './style.css';

interface IProps extends IBaseModalProps, ObjectOf<any> {
  modalTransition?: ReturnType<typeof useTransition>;
}

export function useBottomModalTransition(
  isOpen: boolean,
  props: ObjectOf<any> = {}
) {
  return useTransition(isOpen, null, {
    // @ts-ignore
    from: { transform: 'translateY(100%) translateX(-50%)' },
    // @ts-ignore
    enter: { transform: 'translateY(0%) translateX(-50%)' },
    // @ts-ignore
    leave: { transform: 'translateY(100%) translateX(-50%)' },
    ...props
  });
}

function BottomModal({
  children,
  isOpen,
  onRequestClose,
  className,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  modalTransition = useBottomModalTransition(isOpen),
  style = {},
  ...props
}: IProps) {
  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      {modalTransition.map(({ item, key, props: transitionStyles }) =>
        item ? (
          <animated.div
            className={['BottomModal', 'shadow-lg', className].join(' ')}
            key={key}
            style={{ ...transitionStyles, ...style }}
            {...props}
          >
            {children}
          </animated.div>
        ) : null
      )}
    </BaseModal>
  );
}

export default BottomModal;
