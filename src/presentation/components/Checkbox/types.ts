import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

import { TodoModel } from '@model/todo-model';

export interface CheckboxProps {
  text: string;
  checked: boolean;
  onClickDelete: MouseEventHandler<HTMLButtonElement> | undefined;
  setTodoList: Dispatch<SetStateAction<TodoModel[]>>;
}
