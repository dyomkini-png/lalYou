import { useState } from 'react';
import GiftCard from './GiftCard';
import GiftModal from './GiftModal';
import styles from './Inventory.module.css';

const GIFTS = [
  { id: 1, emoji: '🍀🪙', price: 256, name: '' },
  { id: 2, emoji: '🧸', price: 256, name: 'Plush Pepe #2760' },
  { id: 3, emoji: '🍀🪙', price: 256 },
  { id: 4, emoji: '🍀🪙', price: 256 },
  { id: 5, emoji: '🍀🪙', price: 256 },
];

export default function Inventory() {
  const [selected, setSelected] = useState(new Set());
  const [filter, setFilter] = useState('all');
  const [modalGift, setModalGift] = useState(null);
  const [isEmpty] = useState(false);

  const toggleSelect = (gift) => {
    const next = new Set(selected);
    if (next.has(gift.id)) next.delete(gift.id);
    else next.add(gift.id);
    setSelected(next);
  };

  const totalCoins = GIFTS
    .filter(g => selected.has(g.id))
    .reduce((sum, g) => sum + g.price, 0);

  if (isEmpty) {
    return (
      <div className={styles.empty}>
        <div className={styles.emptyAdd}>
          <span className={styles.emptyPlus}>+</span>
          <span className={styles.emptyLabel}>Добавить<br/>свой подарок</span>
        </div>
        <h2 className={styles.emptyTitle}>В твоем инвентаре пусто</h2>
        <p className={styles.emptyText}>
          Получай подарки за игру в режимы<br/>
          или закидывай свои в бота{' '}
          <a href="#" className={styles.emptyLink}>@momtis*</a>
          {' '}и обменивай на баланс
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.inventory}>
        <div className={styles.filterRow}>
          <button
            className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('all')}
          >
            ⭐ Все подарки
          </button>
          <button
            className={`${styles.filterBtn} ${filter === 'popular' ? styles.activeFilter : ''}`}
            onClick={() => setFilter('popular')}
          >
            Popular 🔽
          </button>
        </div>

        <div className={styles.grid}>
          <GiftCard gift={{ isAdd: true }} />
          {GIFTS.map((gift) => (
            <GiftCard
              key={gift.id}
              gift={gift}
              selected={selected.has(gift.id)}
              onSelect={(g) => { setModalGift(g); }}
            />
          ))}
        </div>
      </div>

      {selected.size > 0 && (
        <div className={styles.bottomBar}>
          <button className={styles.cancelBtn} onClick={() => setSelected(new Set())}>✕</button>
          <button className={styles.takeBtn}>Забрать {selected.size} подарка</button>
          <button className={styles.sellBtn}>
            Продать за <span className={styles.coinIcon}>🪙</span> {totalCoins}
          </button>
        </div>
      )}

      {modalGift && (
        <GiftModal
          gift={modalGift}
          onClose={() => setModalGift(null)}
          onTake={() => { setModalGift(null); toggleSelect(modalGift); }}
          onSell={() => { setModalGift(null); }}
        />
      )}
    </>
  );
}
