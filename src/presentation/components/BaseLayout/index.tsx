import { ReactNode } from 'react';

import { Header } from '../Header';
import styles from './styles.module.scss';

interface BaseLayoutProps {
  children: ReactNode;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
