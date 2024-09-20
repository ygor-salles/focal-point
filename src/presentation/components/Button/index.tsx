import styles from './styles.module.scss';
import { ButtonProps } from './types';

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...rest}>
      {children}
    </button>
  );
}
