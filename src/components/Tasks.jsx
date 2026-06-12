import styles from './Tasks.module.css';

const TASKS = [
  { id: 1, title: 'Откопай 10 могил', reward: 100, done: false },
  { id: 2, title: 'Отправь 5 лопат', reward: 50, done: true },
  { id: 3, title: 'Пригласи 3 друзей', reward: 200, done: false },
];

export default function Tasks() {
  return (
    <div className={styles.container}>
      {TASKS.map((task) => (
        <div key={task.id} className={`${styles.task} ${task.done ? styles.done : ''}`}>
          <div className={styles.taskInfo}>
            <span className={styles.taskTitle}>{task.title}</span>
            <span className={styles.taskReward}>🪙 {task.reward}</span>
          </div>
          <button className={task.done ? styles.doneBtn : styles.claimBtn} disabled={task.done}>
            {task.done ? '✓' : 'Забрать'}
          </button>
        </div>
      ))}
    </div>
  );
}
