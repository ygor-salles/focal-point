import { Button } from '@components/Button';

import { TaskCard } from './components/TaskCard';
import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <TaskCard />
      <Button variant="primary">Adicionar nova tarefa</Button>
    </div>
  );
}
