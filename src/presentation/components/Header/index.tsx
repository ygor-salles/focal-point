import Image from 'next/image';

import { IMAGES } from '@assets/index';
import { parseDateFormat } from '@utils/parseDateFormat';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <Image src={IMAGES.logo} alt="logo" width={150} height={36} priority={false} />
      <h1 className={styles.title}>Bem-vindo de volta, Marcus</h1>
      <span className={styles.description}>{parseDateFormat(new Date())}</span>
    </header>
  );
}
