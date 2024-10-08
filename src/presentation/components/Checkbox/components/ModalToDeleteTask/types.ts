import { MouseEventHandler } from 'react';

export interface ModalToDeleteProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement> | undefined;
  onConfirm: MouseEventHandler<HTMLButtonElement> | undefined;
}
