import { MouseEventHandler } from 'react';

export interface ModalToDeleteProps {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement> | undefined;
}
