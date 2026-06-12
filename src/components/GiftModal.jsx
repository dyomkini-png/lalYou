import styles from './GiftModal.module.css';

export default function GiftModal({ gift, onClose, onTake, onSell }) {
  const imgSrc = gift.image === 'plushPepe'
    ? '/assets/gift-plush-pepe.png'
    : '/assets/gift-cauldron-modal.png';

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.giftDisplay}>
          <img src={imgSrc} alt="gift" className={styles.giftImg} />
          <div className={styles.giftPrice}>
            <img src="/assets/coin-icon.png" alt="coin" className={styles.coinIcon} />
            <span>{gift.price}</span>
          </div>
        </div>

        <button className={styles.takeBtn} onClick={onTake}>
          Забрать подарок
        </button>
        <button className={styles.sellBtn} onClick={onSell}>
          Продать за
          <img src="/assets/coin-icon.png" alt="coin" className={styles.coinIcon} />
          {gift.price}
        </button>
      </div>
    </div>
  );
}
