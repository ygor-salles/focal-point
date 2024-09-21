import { FormEvent, useRef } from 'react';

import { TodoModel } from '@model/todo-model';

import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { TextInput } from '@components/TextInput';
import { storageKeys } from '@constants/storageKeys';

import styles from './styles.module.scss';
import { ModalToRegisterProps } from './types';

export function ModalToRegisterTask({
  open,
  todoList,
  onClose,
  setTodoList,
}: ModalToRegisterProps) {
  const inputTaskRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = inputTaskRef.current?.value;

    if (!value || value.length === 0) return;

    const alreadyExistsTask = todoList.some(
      item => item.text.toLowerCase() === value.toLowerCase(),
    );

    if (alreadyExistsTask) {
      alert('Tarefa já existe!');
      return;
    }

    setTodoList(prev => {
      const updated: TodoModel[] = [...prev, { check: false, text: value }];
      localStorage.setItem(storageKeys.TODO_LIST, JSON.stringify(updated));
      return updated;
    });
    onClose();
  };

  return (
    <Modal open={open}>
      <h3 className={styles.title}>Nova tarefa</h3>
      <form className={styles.form} method="post" onSubmit={handleSubmit}>
        <TextInput ref={inputTaskRef} label="Título" placeholder="Digite" />
        <div className={styles.wrapper_buttons}>
          <Button variant="secondary" type="button" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="primary" type="submit">
            Adicionar
          </Button>
        </div>
      </form>
    </Modal>
  );
}
