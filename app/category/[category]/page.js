import Link from "next/link";
import { challenges, categories } from "../../../data/challenges";
import styles from "./category.module.css";

export default function CategoryPage({ params }) {
  const categoryId = params.category;
  const category = categories.find((cat) => cat.id === categoryId);
  const categoryChallenges = challenges[categoryId] || [];

  if (!category) {
    return (
      <div className={styles.container}>
        <h1>Category not found</h1>
        <Link href="/">Go back home</Link>
      </div>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href="/" className={styles.backLink}>
          ← Back to Categories
        </Link>

        <header className={styles.header}>
          <div className={styles.icon}>{category.icon}</div>
          <h1 className={styles.title}>{category.name}</h1>
          <p className={styles.description}>{category.description}</p>
          <div className={styles.count}>{category.count} challenges</div>
        </header>

        <div className={styles.challenges}>
          {categoryChallenges.map((challenge) => (
            <Link
              href={`/challenge/${categoryId}/${challenge.id}`}
              key={challenge.id}
              className={styles.challengeCard}
            >
              <div className={styles.challengeNumber}>#{challenge.id}</div>
              <h2 className={styles.challengeTitle}>{challenge.title}</h2>
              <p className={styles.challengeDescription}>
                {challenge.description}
              </p>
              <div className={styles.viewChallenge}>View Challenge →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.id,
  }));
}
