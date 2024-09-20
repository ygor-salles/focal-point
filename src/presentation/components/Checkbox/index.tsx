import Image from 'next/image';

import { IMAGES } from '@assets/index';

import styles from './styles.module.scss';

export function Checkbox() {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.checkbox} />
      <label className={styles.label}>Lavar as mãos</label>
      <button className={styles.button}>
        <Image src={IMAGES.trash} alt="lixeira" width={24} height={24} priority={false} />
      </button>
    </div>
  );
}
