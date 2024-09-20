import { MouseEventHandler } from 'react';

export interface ModalToRegisterProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement> | undefined;
}
