import styles from './page.module.css';

export default function CSSModuleTest() {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>ONDI</h1>
        <h2 className={styles.subtitle}>Office for Nigerian Digital Innovation</h2>
        <p className={styles.description}>
          Empowering Nigeria's digital future through innovation, talent development, and strategic partnerships.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton}>
            Explore Programs
          </button>
          <button className={styles.secondaryButton}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
