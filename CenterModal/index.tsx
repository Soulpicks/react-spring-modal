import React from 'react';
import { useTransition, animated } from 'react-spring';
import { ObjectOf } from '../generic-types';
import BaseModal, { IBaseModalProps } from '../BaseModal';

import './style.css';

interface IProps extends IBaseModalProps, ObjectOf<any> {
  modalTransition?: ReturnType<typeof useTransition>;
}

export function useCenterModalTransition(
  isOpen: boolean,
  props: ObjectOf<any> = {}
) {
  return useTransition(isOpen, null, {
    // @ts-ignore
    from: { opacity: 0 },
    // @ts-ignore
    enter: { opacity: 1 },
    // @ts-ignore
    leave: { opacity: 0 },
    ...props
  });
}

function CenterModal({
  isOpen,
  onRequestClose,
  className,
  // eslint-disable-next-line react-hooks/rules-of-hooks
  modalTransition = useCenterModalTransition(isOpen),
  style = {},
  ...props
}: IProps) {
  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      {modalTransition.map(({ item, key, props: transitionStyles }) =>
        item ? (
          <animated.div
            key={key}
            style={{ ...transitionStyles, ...style }}
            className={['CenterModal shadow-lg', className].join(' ')}
            {...props}
          />
        ) : null
      )}
    </BaseModal>
  );
}

export default CenterModal;
