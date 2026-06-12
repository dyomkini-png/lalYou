import styles from './ProfileHeader.module.css';

export default function ProfileHeader({ player }) {
  return (
    <div className={styles.profileHeader}>
      <h1 className={styles.pageTitle}>Профиль</h1>

      <div className={styles.statsRow}>
        <div className={styles.statLeft}>
          <div className={styles.statBadge}>
            <span className={styles.statValue}>{player.shovels}</span>
            <span className={styles.statLabel}>Лопат<br/>отправил</span>
          </div>
          <div className={styles.regDate}>
            <span className={styles.dateValue}>{player.regDate}</span>
            <span className={styles.dateLabel}>Дата<br/>регистрации</span>
          </div>
        </div>

        <div className={styles.avatarBlock}>
          <div className={styles.avatar}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="#2a1050"/>
              <circle cx="30" cy="22" r="12" fill="#4a3070"/>
              <ellipse cx="30" cy="50" rx="18" ry="12" fill="#4a3070"/>
            </svg>
          </div>
          <div className={styles.playerName}>{player.name}</div>
          <div className={styles.playerEmoji}>🔮</div>
        </div>

        <div className={styles.statRight}>
          <div className={styles.statBadge}>
            <span className={styles.statValue}>{player.graves}</span>
            <span className={styles.statLabel}>Могил<br/>откопал</span>
          </div>
          <div className={styles.statBadge}>
            <span className={styles.statValue}>{player.gifts}</span>
            <span className={styles.statLabel}>Подарков<br/>вывел</span>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button className={styles.langBtn}>RU</button>
        <button className={styles.menuBtn}>☰</button>
      </div>
    </div>
  );
}
