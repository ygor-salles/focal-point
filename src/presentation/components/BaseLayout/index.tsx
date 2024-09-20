import { Header } from '../Header';
import styles from './styles.module.scss';
import { BaseLayoutProps } from './types';

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
