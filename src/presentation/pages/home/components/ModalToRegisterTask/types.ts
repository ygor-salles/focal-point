import { Dispatch, SetStateAction } from 'react';

import { TodoModel } from '@model/todo-model';

export interface ModalToRegisterProps {
  todoList: TodoModel[];
  open: boolean;
  onClose: () => void;
  setTodoList: Dispatch<SetStateAction<TodoModel[]>>;
}
