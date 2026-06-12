import styles from './ChatBubble.module.css';

export default function ChatBubble({ sender, message }) {
  return (
    <div className={styles.bubble}>
      <div className={styles.avatar}>👤</div>
      <div className={styles.content}>
        <span className={styles.name}>{sender}</span>
        <span className={styles.text}>{message}</span>
      </div>
    </div>
  );
}
