import { ContentHome } from './components/ContentHome';
import styles from './styles.module.scss';

export function Home() {
  return (
    <div className={styles.container}>
      <ContentHome />
    </div>
  );
}
