import styles from './Header.module.css';

export default function Header({ coins }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.title}>Graveyard Party's Supa Game</span>
      </div>
      <div className={styles.right}>
        <button className={styles.iconBtn} aria-label="Menu">⋮</button>
        <button className={styles.iconBtn} aria-label="Close">✕</button>
      </div>
      <div className={styles.coins}>
        <span className={styles.coinIcon}>🪙</span>
        <span className={styles.coinCount}>{coins}</span>
        <button className={styles.addBtn} aria-label="Add coins">+</button>
      </div>
    </header>
  );
}
