import { TodoModel } from '@model/todo-model';

export const defaultValues: Array<TodoModel> = [
  { text: 'Lavar as mãos', check: false },
  { text: 'Fazer um bolo', check: false },
  { text: 'Lavar a louça', check: false },
  { text: 'Levar o lixo para fora', check: true },
];
