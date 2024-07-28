import styles from "@components/ProgressBar/ProgressBar.module.css";

export function ProgressBar() {
  return <input className={styles.styledProgressInput} type="range" min={0} />;
}
