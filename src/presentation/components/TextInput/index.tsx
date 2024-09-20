import styles from './styles.module.scss';
import { TextInputProps } from './types';

export function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} {...props} />
    </div>
  );
}
