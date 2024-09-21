import { TodoModel } from '@model/todo-model';

import { storageKeys } from '@constants/storageKeys';

export const getTodoListLocalStorage = () => {
  if (typeof window !== undefined && window?.localStorage) {
    const stringData = localStorage.getItem(storageKeys.TODO_LIST);

    if (!stringData || stringData.length === 0) return [];

    const formatData = JSON.parse(stringData) as TodoModel[];
    return formatData;
  }
  return [];
};
