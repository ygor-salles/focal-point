import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <div>card</div>
      <button>Adicionar nova tarefa</button>
    </div>
  );
}
