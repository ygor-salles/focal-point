import { Button } from '@components/Button';
import { Modal } from '@components/Modal';

import styles from './styles.module.scss';
import { ModalToDeleteProps } from './types';

export function ModalToDeleteTask({ open, onClose }: ModalToDeleteProps) {
  return (
    <Modal open={open}>
      <h3 className={styles.title}>Deletar tarefa</h3>
      <span>Tem certeza que você deseja deletar essa tarefa?</span>
      <div className={styles.wrapper_buttons}>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Deletar
        </Button>
      </div>
    </Modal>
  );
}
