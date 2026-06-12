import styles from './BottomNav.module.css';

const NAV_ITEMS = [
  { id: 'chat', label: 'Chat', icon: 'chat' },
  { id: 'shop', label: 'Shop', icon: 'shop' },
  { id: 'game', label: 'Game', icon: 'game' },
  { id: 'clan', label: 'Clan', icon: 'clan', badge: 99 },
  { id: 'daily', label: 'Daily', icon: 'daily' },
  { id: 'profile', label: 'Profile', icon: 'profile' },
];

function NavIcon({ type, active }) {
  const color = active ? '#fff' : '#8060b0';
  const size = 22;

  switch (type) {
    case 'chat':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.5"/>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill={active ? 'rgba(128,96,176,0.2)' : 'none'}/>
          <path d="M8 10h0M12 10h0M16 10h0" stroke={color} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
    case 'shop':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M3 9l1.5-5h15L21 9" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 9h18v2a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke={color} strokeWidth="1.5"/>
          <path d="M9 15v4M15 15v4M6 13v6h12v-6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'game':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L9 7H3l5 4-2 7 6-4 6 4-2-7 5-4h-6L12 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      );
    case 'clan':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 3C7 3 3 7 3 12c0 3 2 6 4 7l1-4h8l1 4c2-1 4-4 4-7 0-5-4-9-9-9z" stroke={color} strokeWidth="1.5"/>
          <path d="M9 12h6M12 9v6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'daily':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5"/>
          <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'profile':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" stroke={color} strokeWidth="1.5"/>
          <path d="M4 20c0-4 4-7 8-7s8 3 8 7" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function BottomNav({ active, onChange }) {
  return (
    <nav className={styles.nav}>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={`${styles.navItem} ${active === item.id ? styles.active : ''}`}
          onClick={() => onChange(item.id)}
        >
          <div className={styles.iconWrap}>
            <NavIcon type={item.icon} active={active === item.id} />
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </div>
          <span className={styles.label}>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
