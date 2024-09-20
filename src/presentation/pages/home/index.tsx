import { TaskCard } from './components/TaskCard';
import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <TaskCard />
      <button>Adicionar nova tarefa</button>
    </div>
  );
}
