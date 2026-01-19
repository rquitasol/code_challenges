"use client";

import { useState } from "react";
import styles from "./SolutionSection.module.css";

export default function SolutionSection({ solution }) {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <section className={styles.solution}>
      <div className={styles.solutionHeader}>
        <h2>Solution</h2>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className={styles.toggleButton}
        >
          {showSolution ? "🙈 Hide Solution" : "👁️ Show Solution"}
        </button>
      </div>

      {showSolution && (
        <div className={styles.solutionContent}>
          <pre>
            <code>{solution}</code>
          </pre>
        </div>
      )}

      {!showSolution && (
        <p className={styles.solutionHint}>
          Try solving the challenge yourself first! Click the button above when
          you need help.
        </p>
      )}
    </section>
  );
}
