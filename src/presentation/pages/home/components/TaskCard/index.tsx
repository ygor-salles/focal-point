import { useCallback, useState } from 'react';

import { Checkbox } from '@components/Checkbox';

import { ModalToDeleteTask } from '../ModalToDeleteTask';
import styles from './styles.module.scss';

export function TaskCard() {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(prev => !prev);
  }, []);

  return (
    <>
      <div className={styles.card}>
        <span className={styles.text}>Suas tarefas de hoje</span>
        <div className={styles.wrapper}>
          <Checkbox onClickDelete={handleToggleModal} />
          <Checkbox onClickDelete={handleToggleModal} />
          <Checkbox onClickDelete={handleToggleModal} />
        </div>
        <span className={styles.text}>Tarefas finalizadas</span>
        <div className={styles.wrapper}>
          <Checkbox onClickDelete={handleToggleModal} />
        </div>
      </div>
      <ModalToDeleteTask open={openModal} onClose={handleToggleModal} />
    </>
  );
}
