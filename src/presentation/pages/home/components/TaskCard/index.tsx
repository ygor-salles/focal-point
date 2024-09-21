import { Checkbox } from '@components/Checkbox';

import styles from './styles.module.scss';
import { TaskCardProps } from './types';

export function TaskCard({ todoList, setTodoList }: TaskCardProps) {
  const taskActive = todoList.filter(item => !item.check);
  const taskFinish = todoList.filter(item => item.check);

  return (
    <div className={styles.card}>
      <span className={styles.text}>
        {taskActive.length > 0
          ? 'Suas tarefas de hoje'
          : 'Não há nenhuma tarefa pendente, adicione novas tarefas'}
      </span>
      <div className={styles.wrapper}>
        {taskActive.map(({ text, check }) => (
          <Checkbox key={text} text={text} checked={check} setTodoList={setTodoList} />
        ))}
      </div>
      {taskFinish.length > 0 && (
        <>
          <span className={styles.text}>Tarefas finalizadas</span>
          <div className={styles.wrapper}>
            {taskFinish.map(({ text, check }) => (
              <Checkbox key={text} text={text} checked={check} setTodoList={setTodoList} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
