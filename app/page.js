import Link from "next/link";
import { categories } from "../data/challenges";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Code Challenges 🚀</h1>
          <p className={styles.subtitle}>
            Master JavaScript through hands-on coding challenges
          </p>
        </header>

        <div className={styles.categories}>
          {categories.map((category) => (
            <Link
              href={`/category/${category.id}`}
              key={category.id}
              className={styles.categoryCard}
            >
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h2 className={styles.categoryName}>{category.name}</h2>
              <p className={styles.categoryDescription}>
                {category.description}
              </p>
              <div className={styles.challengeCount}>
                {category.count} challenges
              </div>
            </Link>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>Practice JavaScript challenges and improve your coding skills</p>
        </footer>
      </div>
    </main>
  );
}
