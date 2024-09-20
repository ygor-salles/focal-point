import Image from 'next/image';

import { IMAGES } from '@assets/index';

import styles from './styles.module.scss';
import { CheckboxProps } from './types';

export function Checkbox({ onClickDelete }: CheckboxProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.checkbox} />
      <label className={styles.label}>Lavar as mãos</label>
      <button className={styles.button} type="button" onClick={onClickDelete}>
        <Image src={IMAGES.trash} alt="lixeira" width={24} height={24} priority={false} />
      </button>
    </div>
  );
}
