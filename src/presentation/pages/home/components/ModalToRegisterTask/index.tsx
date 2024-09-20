import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { TextInput } from '@components/TextInput';

import styles from './styles.module.scss';
import { ModalToRegisterProps } from './types';

export function ModalToRegisterTask({ open, onClose }: ModalToRegisterProps) {
  return (
    <Modal open={open}>
      <h3 className={styles.title}>Nova tarefa</h3>
      <TextInput label="Título" placeholder="Digite" />
      <div className={styles.wrapper_buttons}>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Adicionar
        </Button>
      </div>
    </Modal>
  );
}
