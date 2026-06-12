import styles from './ProfileHeader.module.css';

export default function ProfileHeader({ player }) {
  return (
    <div className={styles.header}>
      <img src="/assets/bg.png" className={styles.bg} alt="" />

      <div className={styles.topBar}>
        <span className={styles.gameTitle}>Graveyard Party&apos;s Supa Game</span>
        <button className={styles.dotsBtn} aria-label="Menu">⋮</button>
        <button className={styles.closeBtn} aria-label="Close">✕</button>
      </div>

      <div className={styles.coinsRow}>
        <div className={styles.coinsBadge}>
          <img src="/assets/coins-badge.png" alt="" className={styles.coinsImg} />
          <span className={styles.coinsVal}>{player.coins}</span>
          <button className={styles.addCoin}>+</button>
        </div>
        <h1 className={styles.title}>Профиль</h1>
        <div className={styles.rightBtns}>
          <button className={styles.langBtn}>RU</button>
          <button className={styles.menuBtn}>☰</button>
        </div>
      </div>

      <div className={styles.statsSection}>
        <div className={styles.statItem}>
          <div className={styles.statBadge}>
            <img src="/assets/stat-shovel-badge.png" alt="" className={styles.statBadgeImg} />
            <span className={styles.statNum}>{player.shovels}</span>
          </div>
          <span className={styles.statLabel}>Лопат<br/>отправил</span>
        </div>

        <div className={styles.avatarCol}>
          <div className={styles.avatarWrap}>
            <img src="/assets/ava-frame.png" alt="avatar" className={styles.avatarFrame} />
          </div>
          <div className={styles.playerName}>{player.name}</div>
        </div>

        <div className={styles.statItem}>
          <div className={styles.statBadge}>
            <img src="/assets/stat-graves-badge.png" alt="" className={styles.statBadgeImg} />
            <span className={styles.statNum}>{player.graves}</span>
          </div>
          <span className={styles.statLabel}>Могил<br/>откопал</span>
        </div>
      </div>

      <div className={styles.bottomStats}>
        <div className={styles.regDate}>
          <img src="/assets/stat-shovel.png" alt="" className={styles.regIcon} />
          <span className={styles.regText}>{player.regDate}<br/>Дата<br/>регистрации</span>
        </div>
        <div className={styles.giftsStat}>
          <span className={styles.giftsNum}>{player.gifts}</span>
          <span className={styles.giftsLabel}>Подарков<br/>выиграл</span>
        </div>
      </div>
    </div>
  );
}
