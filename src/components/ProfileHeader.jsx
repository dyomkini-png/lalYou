import styles from './ProfileHeader.module.css';

export default function ProfileHeader({ player }) {
  return (
    <div className={styles.profileHeader}>
      {/* Background */}
      <img src="/assets/bg.png" className={styles.bgImage} alt="" />

      <div className={styles.inner}>
        {/* Top controls */}
        <div className={styles.topControls}>
          <div className={styles.coinsBlock}>
            <img src="/assets/coin-icon.png" alt="coin" className={styles.coinIcon} />
            <span className={styles.coinCount}>{player.coins}</span>
            <button className={styles.addBtn}>+</button>
          </div>
          <h1 className={styles.pageTitle}>Профиль</h1>
          <div className={styles.rightControls}>
            <button className={styles.langBtn}>RU</button>
            <button className={styles.menuBtn}>☰</button>
          </div>
        </div>

        {/* Stats row image — covers the whole stats section */}
        <div className={styles.statsWrapper}>
          <img src="/assets/profile-stats-row.png" alt="profile stats" className={styles.statsRowImg} />
          {/* Avatar overlay */}
          <div className={styles.avatarOverlay}>
            <img src="/assets/avatar-frame.png" alt="avatar" className={styles.avatarFrame} />
            <div className={styles.playerName}>{player.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
