import Image from 'next/image';
import { ChangeEvent } from 'react';

import { TodoModel } from '@model/todo-model';

import { IMAGES } from '@assets/index';

import styles from './styles.module.scss';
import { CheckboxProps } from './types';

export function Checkbox({ text, checked, onClickDelete, setTodoList }: CheckboxProps) {
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

  return (
    <div className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={text}
        value={text}
        onChange={handleChange}
        defaultChecked={checked}
      />
      <label className={styles.label}>{text}</label>
      <button className={styles.button} type="button" onClick={onClickDelete}>
        <Image src={IMAGES.trash} alt="lixeira" width={24} height={24} priority={false} />
      </button>
    </div>
  );
}
