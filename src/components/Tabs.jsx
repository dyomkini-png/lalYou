import styles from './Tabs.module.css';

const TABS = ['Инвентарь', 'Рефералка', 'Задания'];

export default function Tabs({ active, onChange }) {
  return (
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
      <div className={styles.chainDecor}>⛓</div>
    </div>
  );
}
