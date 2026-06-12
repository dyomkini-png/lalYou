import styles from './GiftCard.module.css';

const GIFT_IMAGES = {
  cauldron:  '/assets/gift-cauldron.png',
  cauldron2: '/assets/gift-cauldron2.png',
  plushPepe: '/assets/gift-plush-pepe.png',
};

export default function GiftCard({ gift, selected, onSelect }) {
  if (gift.isAdd) {
    return (
      <div className={styles.addCard} onClick={gift.onClick}>
        <span className={styles.plus}>+</span>
        <span className={styles.addLabel}>Добавить<br/>свой подарок</span>
      </div>
    );
  }

  const isPlush = gift.image === 'plushPepe';

  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''} ${isPlush ? styles.plushCard : ''}`}
      onClick={() => onSelect(gift)}
    >
      <div className={`${styles.checkbox} ${selected ? styles.checked : ''}`}>
        {selected && <span className={styles.checkmark}>✓</span>}
      </div>

      <div className={styles.imgWrap}>
        <img
          src={GIFT_IMAGES[gift.image] || GIFT_IMAGES.cauldron}
          alt={gift.name || 'gift'}
          className={styles.giftImg}
        />
      </div>

      <div className={styles.priceBadge}>
        <img src="/assets/coins-badge.png" alt="" className={styles.badgeImg} />
        <span className={styles.priceText}>{gift.price}</span>
      </div>

      {gift.name && <div className={styles.giftName}>{gift.name}</div>}
    </div>
  );
}
