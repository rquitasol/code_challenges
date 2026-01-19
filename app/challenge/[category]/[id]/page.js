import Link from "next/link";
import { challenges, categories } from "../../../../data/challenges";
import CodeEditor from "../../../components/CodeEditor";
import SolutionSection from "../../../components/SolutionSection";
import styles from "./challenge.module.css";

export default function ChallengePage({ params }) {
  const { category: categoryId, id } = params;
  const category = categories.find((cat) => cat.id === categoryId);
  const challenge = challenges[categoryId]?.find(
    (ch) => ch.id === parseInt(id),
  );

  if (!challenge || !category) {
    return (
      <div className={styles.container}>
        <h1>Challenge not found</h1>
        <Link href="/">Go back home</Link>
      </div>
    );
  }

  const currentIndex = challenges[categoryId].findIndex(
    (ch) => ch.id === parseInt(id),
  );
  const prevChallenge =
    currentIndex > 0 ? challenges[categoryId][currentIndex - 1] : null;
  const nextChallenge =
    currentIndex < challenges[categoryId].length - 1
      ? challenges[categoryId][currentIndex + 1]
      : null;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Link href={`/category/${categoryId}`} className={styles.backLink}>
          ← Back to {category.name}
        </Link>

        <article className={styles.challenge}>
          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>
                {category.icon} {category.name}
              </span>
              <span className={styles.number}>Challenge #{challenge.id}</span>
            </div>
            <h1 className={styles.title}>{challenge.title}</h1>
            <p className={styles.description}>{challenge.description}</p>
          </header>

          <section className={styles.editorSection}>
            <h2>Try it yourself!</h2>
            <CodeEditor
              challenge={challenge}
              initialCode={
                challenge.starterCode ||
                challenge.solution ||
                "// Write your code here\n"
              }
            />
          </section>

          <SolutionSection solution={challenge.solution} />

          <nav className={styles.navigation}>
            <div className={styles.navButtons}>
              {prevChallenge ? (
                <Link
                  href={`/challenge/${categoryId}/${prevChallenge.id}`}
                  className={`${styles.navButton} ${styles.prev}`}
                >
                  <span className={styles.navLabel}>← Previous</span>
                  <span className={styles.navTitle}>{prevChallenge.title}</span>
                </Link>
              ) : (
                <div className={styles.navButtonPlaceholder}></div>
              )}

              {nextChallenge ? (
                <Link
                  href={`/challenge/${categoryId}/${nextChallenge.id}`}
                  className={`${styles.navButton} ${styles.next}`}
                >
                  <span className={styles.navLabel}>Next →</span>
                  <span className={styles.navTitle}>{nextChallenge.title}</span>
                </Link>
              ) : (
                <div className={styles.navButtonPlaceholder}></div>
              )}
            </div>
          </nav>
        </article>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const params = [];

  for (const [categoryId, challengeList] of Object.entries(challenges)) {
    for (const challenge of challengeList) {
      params.push({
        category: categoryId,
        id: challenge.id.toString(),
      });
    }
  }

  return params;
}
