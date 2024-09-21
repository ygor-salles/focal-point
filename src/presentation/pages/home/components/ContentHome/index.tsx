'use client';

import { useCallback, useEffect, useState } from 'react';

import { TodoModel } from '@model/todo-model';

import { Button } from '@components/Button';
import { getTodoListLocalStorage } from '@utils/getTodoListLocalStorage';

import { ModalToRegisterTask } from '../ModalToRegisterTask';
import { TaskCard } from '../TaskCard';

export function ContentHome() {
  const [todoList, setTodoList] = useState<TodoModel[]>();
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => setOpenModal(prev => !prev), []);

  // TODO: localStorage only runs on the client-side
  useEffect(() => {
    setTodoList(getTodoListLocalStorage());
  }, []);

  if (!todoList) {
    return <p>Buscando dados...</p>;
  }

  return (
    <>
      <TaskCard todoList={todoList} setTodoList={setTodoList} />
      <Button variant="primary" type="button" onClick={handleToggleModal}>
        Adicionar nova tarefa
      </Button>

      <ModalToRegisterTask
        open={openModal}
        todoList={todoList}
        onClose={handleToggleModal}
        setTodoList={setTodoList}
      />
    </>
  );
}
