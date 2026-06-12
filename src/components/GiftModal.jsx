import styles from './GiftModal.module.css';

const GIFT_IMAGES = {
  cauldron:  '/assets/gift-cauldron.png',
  cauldron2: '/assets/gift-cauldron2.png',
  plushPepe: '/assets/gift-plush-pepe.png',
};

export default function GiftModal({ gift, onClose, onTake, onSell }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <div className={styles.giftDisplay}>
          <img
            src={GIFT_IMAGES[gift.image] || GIFT_IMAGES.cauldron}
            alt="gift"
            className={styles.giftImg}
          />
          <div className={styles.priceBadge}>
            <img src="/assets/coins-badge.png" alt="" className={styles.badgeImg} />
            <span className={styles.priceText}>{gift.price}</span>
          </div>
        </div>

        <button className={styles.takeBtn} onClick={onTake}>
          Забрать подарок
        </button>
        <button className={styles.sellBtn} onClick={onSell}>
          Продать за
          <img src="/assets/coins-badge.png" alt="" className={styles.sellBadge} />
          <span>{gift.price}</span>
        </button>
      </div>
    </div>
  );
}
