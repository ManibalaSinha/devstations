import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} role="status" aria-label="Loading" />
    </div>
  );
}
