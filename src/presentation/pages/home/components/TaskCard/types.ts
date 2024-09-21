import { Dispatch, SetStateAction } from 'react';

import { TodoModel } from '@model/todo-model';

export interface TaskCardProps {
  todoList: TodoModel[];
  setTodoList: Dispatch<SetStateAction<TodoModel[] | undefined>>;
}
