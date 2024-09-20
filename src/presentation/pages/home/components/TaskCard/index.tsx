import { useCallback, useState } from 'react';

import { Checkbox } from '@components/Checkbox';

import { ModalToDeleteTask } from '../ModalToDeleteTask';
import styles from './styles.module.scss';
import { TaskCardProps } from './types';

export function TaskCard({ todoList, setTodoList }: TaskCardProps) {
  const [openModal, setOpenModal] = useState(false);

  const taskActive = todoList.filter(item => !item.check);
  const taskFinish = todoList.filter(item => item.check);

  const handleToggleModal = useCallback(() => {
    setOpenModal(prev => !prev);
  }, []);

  return (
    <>
      <div className={styles.card}>
        <span className={styles.text}>Suas tarefas de hoje</span>
        <div className={styles.wrapper}>
          {taskActive.map(({ text, check }) => (
            <Checkbox
              key={text}
              text={text}
              checked={check}
              onClickDelete={handleToggleModal}
              setTodoList={setTodoList}
            />
          ))}
        </div>
        <span className={styles.text}>Tarefas finalizadas</span>
        <div className={styles.wrapper}>
          {taskFinish.map(({ text, check }) => (
            <Checkbox
              key={text}
              text={text}
              checked={check}
              onClickDelete={handleToggleModal}
              setTodoList={setTodoList}
            />
          ))}
        </div>
      </div>
      <ModalToDeleteTask open={openModal} onClose={handleToggleModal} />
    </>
  );
}
