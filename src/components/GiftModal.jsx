import styles from './GiftModal.module.css';

export default function GiftModal({ gift, onClose, onTake, onSell }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.giftDisplay}>
          <div className={styles.giftEmoji}>{gift.emoji}</div>
          <div className={styles.giftPrice}>
            <span className={styles.coinIcon}>🪙</span>
            <span>{gift.price}</span>
          </div>
        </div>

        <button className={styles.takeBtn} onClick={onTake}>
          Забрать подарок
        </button>
        <button className={styles.sellBtn} onClick={onSell}>
          Продать за <span className={styles.coinIcon}>🪙</span> {gift.price}
        </button>
      </div>
    </div>
  );
}
