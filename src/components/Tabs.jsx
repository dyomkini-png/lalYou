import styles from './Tabs.module.css';

const TABS = ['Инвентарь', 'Рефералка', 'Задания'];

export default function Tabs({ active, onChange }) {
  return (
    <div className={styles.tabsWrap}>
      <div className={styles.chainLeft}>
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
          <path d="M10 0 C10 10, 0 10, 0 20 C0 30, 10 30, 10 40" stroke="#3a1870" strokeWidth="3" fill="none"/>
          <circle cx="10" cy="0" r="4" fill="#3a1870"/>
          <circle cx="10" cy="40" r="4" fill="#3a1870"/>
        </svg>
      </div>
      <div className={styles.chainRight}>
        <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
          <path d="M10 0 C10 10, 20 10, 20 20 C20 30, 10 30, 10 40" stroke="#3a1870" strokeWidth="3" fill="none"/>
          <circle cx="10" cy="0" r="4" fill="#3a1870"/>
          <circle cx="10" cy="40" r="4" fill="#3a1870"/>
        </svg>
      </div>
      <div className={styles.tabs}>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${active === tab ? styles.active : ''}`}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
