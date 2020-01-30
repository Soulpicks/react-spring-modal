import { ReactNode } from 'react';
export interface IBaseModalProps {
    children: ReactNode;
    isOpen: boolean;
    onRequestClose: () => void;
    enableFocusOnReady?: boolean;
}
declare function BaseModal({ isOpen, onRequestClose, enableFocusOnReady, children }: IBaseModalProps): JSX.Element;
export default BaseModal;
