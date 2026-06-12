import styles from './ChatBubble.module.css';

export default function ChatBubble({ sender, message }) {
  return (
    <div className={styles.bubble}>
      <div className={styles.avatar}>
        <img src="/assets/tg-link.png" alt="avatar" className={styles.avatarImg} />
      </div>
      <div className={styles.content}>
        <span className={styles.name}>{sender}</span>
        <span className={styles.text}>{message}</span>
      </div>
    </div>
  );
}
