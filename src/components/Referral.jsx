import styles from './Referral.module.css';

export default function Referral() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Рефералка</h2>
      <p className={styles.text}>Пригласи друзей и получай бонусы!</p>
      <button className={styles.btn}>Пригласить друга</button>
    </div>
  );
}
