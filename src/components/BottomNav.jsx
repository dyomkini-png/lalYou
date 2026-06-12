import styles from './BottomNav.module.css';

const NAV_ITEMS = [
  { id: 'chat', label: 'Chat', emoji: '🌐' },
  { id: 'shop', label: 'Shop', emoji: '🏠' },
  { id: 'game', label: 'Game', emoji: '✝️' },
  { id: 'clan', label: 'Clan', emoji: '🦇', badge: 99 },
  { id: 'daily', label: 'Daily', emoji: '🎯' },
  { id: 'profile', label: 'Profile', emoji: '🎩' },
];

export default function BottomNav({ active, onChange }) {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
          onClick={() => onChange(item.id)}
        >
          <span className={styles.icon}>{item.emoji}</span>
          {item.badge && <span className={styles.badge}>{item.badge}</span>}
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
