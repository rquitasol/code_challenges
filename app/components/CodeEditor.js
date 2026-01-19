"use client";

import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import styles from "./CodeEditor.module.css";

export default function CodeEditor({ challenge, initialCode }) {
  const [code, setCode] = useState(initialCode || "");
  const [output, setOutput] = useState([]);
  const [testResults, setTestResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;

    // Configure Monaco editor theme
    monaco.editor.defineTheme("custom-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#0f1f3d",
        "editor.lineHighlightBackground": "#1e3a5f33",
      },
    });
    monaco.editor.setTheme("custom-dark");
  }

  function captureConsole() {
    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      logs.push({
        type: "log",
        content: args
          .map((arg) =>
            typeof arg === "object"
              ? JSON.stringify(arg, null, 2)
              : String(arg),
          )
          .join(" "),
      });
    };

    console.error = (...args) => {
      logs.push({
        type: "error",
        content: args
          .map((arg) =>
            typeof arg === "object"
              ? JSON.stringify(arg, null, 2)
              : String(arg),
          )
          .join(" "),
      });
    };

    console.warn = (...args) => {
      logs.push({
        type: "warn",
        content: args
          .map((arg) =>
            typeof arg === "object"
              ? JSON.stringify(arg, null, 2)
              : String(arg),
          )
          .join(" "),
      });
    };

    return {
      logs,
      restore: () => {
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;
      },
    };
  }

  async function runCode() {
    setIsRunning(true);
    setOutput([]);
    setTestResults([]);

    const { logs, restore } = captureConsole();

    try {
      // Create a function from the user's code
      const userFunction = new Function(`
        ${code}
        return typeof myFunction !== 'undefined' ? myFunction : 
               typeof solution !== 'undefined' ? solution : null;
      `)();

      if (!userFunction) {
        setOutput([
          {
            type: "error",
            content:
              'No function found. Make sure to define a function named "myFunction" or "solution".',
          },
        ]);
        restore();
        setIsRunning(false);
        return;
      }

      // Run test cases if available
      if (challenge.testCases && challenge.testCases.length > 0) {
        const results = [];

        for (let i = 0; i < challenge.testCases.length; i++) {
          const testCase = challenge.testCases[i];
          try {
            // Parse the input - handle multiple arguments
            let args;
            try {
              // Try to evaluate the input as JavaScript
              args = new Function(`return [${testCase.input}]`)();
            } catch {
              // If that fails, use it as a single string argument
              args = [testCase.input];
            }

            const result = userFunction(...args);
            const expected = new Function(`return ${testCase.expected}`)();

            const passed = JSON.stringify(result) === JSON.stringify(expected);

            results.push({
              index: i + 1,
              input: testCase.input,
              expected: JSON.stringify(expected),
              actual: JSON.stringify(result),
              passed,
            });
          } catch (error) {
            results.push({
              index: i + 1,
              input: testCase.input,
              expected: testCase.expected,
              actual: error.message,
              passed: false,
              error: true,
            });
          }
        }

        setTestResults(results);
      } else {
        // Just run the code without test cases
        new Function(code)();
      }

      // Show console output
      if (logs.length > 0) {
        setOutput(logs);
      } else if (!challenge.testCases || challenge.testCases.length === 0) {
        setOutput([
          { type: "log", content: "Code executed successfully (no output)" },
        ]);
      }
    } catch (error) {
      setOutput([
        { type: "error", content: `Error: ${error.message}` },
        { type: "error", content: error.stack },
      ]);
    } finally {
      restore();
      setIsRunning(false);
    }
  }

  function resetCode() {
    setCode(initialCode || "");
    setOutput([]);
    setTestResults([]);
  }

  const allTestsPassed =
    testResults.length > 0 && testResults.every((t) => t.passed);

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorHeader}>
        <span className={styles.editorTitle}>JavaScript</span>
        <div className={styles.editorActions}>
          <button onClick={resetCode} className={styles.resetButton}>
            Reset
          </button>
          <button
            onClick={runCode}
            className={styles.runButton}
            disabled={isRunning}
          >
            {isRunning ? "Running..." : "Run Code"}
          </button>
        </div>
      </div>

      <div className={styles.editor}>
        <Editor
          height="300px"
          defaultLanguage="javascript"
          value={code}
          onChange={(value) => setCode(value || "")}
          onMount={handleEditorDidMount}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: "on",
          }}
        />
      </div>

      <div className={styles.console}>
        <div className={styles.consoleHeader}>
          <span>Console Output</span>
          {output.length > 0 && (
            <button
              onClick={() => setOutput([])}
              className={styles.clearButton}
            >
              Clear
            </button>
          )}
        </div>
        <div className={styles.consoleOutput}>
          {output.length === 0 ? (
            <div className={styles.consoleEmpty}>
              Click "Run Code" to see output here...
            </div>
          ) : (
            output.map((log, index) => (
              <div
                key={index}
                className={`${styles.consoleLog} ${styles[log.type]}`}
              >
                <span className={styles.logIcon}>
                  {log.type === "error"
                    ? "❌"
                    : log.type === "warn"
                      ? "⚠️"
                      : "▶"}
                </span>
                {log.content}
              </div>
            ))
          )}
        </div>
      </div>

      {testResults.length > 0 && (
        <div className={styles.testResults}>
          <div className={styles.testResultsHeader}>
            <h3>Test Results</h3>
            {allTestsPassed ? (
              <span className={styles.allPassed}>✓ All tests passed!</span>
            ) : (
              <span className={styles.someFailed}>
                {testResults.filter((t) => t.passed).length}/
                {testResults.length} passed
              </span>
            )}
          </div>
          <div className={styles.testResultsList}>
            {testResults.map((result) => (
              <div
                key={result.index}
                className={`${styles.testResult} ${result.passed ? styles.passed : styles.failed}`}
              >
                <div className={styles.testResultHeader}>
                  <span className={styles.testIndex}>Test {result.index}</span>
                  <span className={styles.testStatus}>
                    {result.passed ? "✓ Passed" : "✗ Failed"}
                  </span>
                </div>
                <div className={styles.testResultBody}>
                  <div className={styles.testResultRow}>
                    <span className={styles.testLabel}>Input:</span>
                    <code className={styles.testValue}>{result.input}</code>
                  </div>
                  <div className={styles.testResultRow}>
                    <span className={styles.testLabel}>Expected:</span>
                    <code className={styles.testValue}>{result.expected}</code>
                  </div>
                  <div className={styles.testResultRow}>
                    <span className={styles.testLabel}>Actual:</span>
                    <code
                      className={`${styles.testValue} ${!result.passed ? styles.errorValue : ""}`}
                    >
                      {result.actual}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
