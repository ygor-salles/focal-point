'use client';

import { useCallback, useState } from 'react';

import { TodoModel } from '@model/todo-model';

import { Button } from '@components/Button';

import { ModalToRegisterTask } from '../ModalToRegisterTask';
import { TaskCard } from '../TaskCard';

const defaultValues: Array<TodoModel> = [
  { text: 'Lavar as mãos', check: false },
  { text: 'Fazer um bolo', check: false },
  { text: 'Lavar a louça', check: false },
  { text: 'Levar o lixo para fora', check: true },
];

export function ContentHome() {
  const [todoList, setTodoList] = useState<TodoModel[]>(defaultValues);
  const [openModal, setOpenModal] = useState(false);

  const handleToggleModal = useCallback(() => setOpenModal(prev => !prev), []);

  return (
    <>
      <TaskCard todoList={todoList} setTodoList={setTodoList} />
      <Button variant="primary" type="button" onClick={handleToggleModal}>
        Adicionar nova tarefa
      </Button>
      <ModalToRegisterTask open={openModal} onClose={handleToggleModal} />
    </>
  );
}
