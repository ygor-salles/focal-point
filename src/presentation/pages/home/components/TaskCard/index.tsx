import styles from './styles.module.scss';

export function TaskCard() {
  return (
    <div className={styles.card}>
      <span className={styles.text}>Suas tarefas de hoje</span>
      <div></div>
      <span className={styles.text}>Tarefas finalizadas</span>
      <div></div>
    </div>
  );
}
