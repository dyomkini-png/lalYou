import styles from './GiftCard.module.css';

const GIFT_IMAGES = {
  cauldron: '/assets/gift-cauldron.png',
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

  return (
    <div
      className={`${styles.card} ${selected ? styles.selected : ''}`}
      onClick={() => onSelect(gift)}
    >
      <div className={`${styles.checkbox} ${selected ? styles.checked : ''}`}>
        {selected && <img src="/assets/checkbox-checked.png" alt="✓" className={styles.checkImg} />}
      </div>
      <img
        src={GIFT_IMAGES[gift.image] || GIFT_IMAGES.cauldron}
        alt={gift.name || 'gift'}
        className={styles.giftImg}
      />
      <div className={styles.price}>
        <img src="/assets/coin-icon.png" alt="coin" className={styles.coinIcon} />
        <span>{gift.price}</span>
      </div>
      {gift.name && <div className={styles.giftName}>{gift.name}</div>}
    </div>
  );
}
