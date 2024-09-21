import { Dispatch, SetStateAction } from 'react';

import { TodoModel } from '@model/todo-model';

export interface CheckboxProps {
  text: string;
  checked: boolean;
  setTodoList: Dispatch<SetStateAction<TodoModel[]>>;
}
