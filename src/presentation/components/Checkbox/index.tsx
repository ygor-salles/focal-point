import Image from 'next/image';
import { ChangeEvent, useCallback, useState } from 'react';

import { TodoModel } from '@model/todo-model';

import { IMAGES } from '@assets/index';

import { ModalToDeleteTask } from './components/ModalToDeleteTask';
import styles from './styles.module.scss';
import { CheckboxProps } from './types';

export function Checkbox({ text, checked, setTodoList }: CheckboxProps) {
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setOpenModal(prev => !prev);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    setTodoList(prev => {
      const updated: TodoModel[] = prev.filter(item => item.text !== text);

      return updated;
    });
  }, [setTodoList, text]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    setTodoList(prev => {
      const updated: TodoModel[] = prev.map(item => ({
        ...item,
        check: item.text === value ? checked : item.check,
      }));

      return updated;
    });
  };

  const styleLabel = checked ? `${styles.label} ${styles.label_check}` : styles.label;

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name={text}
          value={text}
          onChange={handleChange}
          defaultChecked={checked}
        />
        <label className={styleLabel}>{text}</label>
        <button className={styles.button} type="button" onClick={handleToggleModal}>
          <Image src={IMAGES.trash} alt="lixeira" width={24} height={24} priority={false} />
        </button>
      </div>

      <ModalToDeleteTask
        open={openModal}
        onClose={handleToggleModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
}
