import styles from './GiftCard.module.css';

export default function GiftCard({ gift, selected, onSelect }) {
  if (gift.isAdd) {
    return (
      <div className={styles.addCard} onClick={gift.onClick}>
        <span className={styles.plus}>+</span>
        <span className={styles.addLabel}>Добавить<br/>свой подарок</span>
      </div>
    );
  }

  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={() => onSelect(gift)}
    >
      <div className={`${styles.checkbox} ${selected ? styles.checked : ''}`}>
        {selected && <span>✓</span>}
      </div>
      <div className={styles.giftImg}>{gift.emoji}</div>
      <div className={styles.price}>
        <span className={styles.coinIcon}>🪙</span>
        <span>{gift.price}</span>
      </div>
      {gift.name && <div className={styles.giftName}>{gift.name}</div>}
    </div>
  );
}
