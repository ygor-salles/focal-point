import styles from './styles.module.scss';
import { ModalProps } from './types';

export function Modal({ open, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className={styles.screen_bg}>
      <dialog className={styles.dialog} open={open}>
        {children}
      </dialog>
    </div>
  );
}
