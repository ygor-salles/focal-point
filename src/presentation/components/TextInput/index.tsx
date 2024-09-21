import { forwardRef } from 'react';

import styles from './styles.module.scss';
import { TextInputProps } from './types';

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} ref={ref} {...props} />
      </div>
    );
  },
);
