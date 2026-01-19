const fs = require("fs");
const path = require("path");

// Read the challenges file
const challengesPath = path.join(__dirname, "../data/challenges.js");

// Import directly
const { challenges, categories } = require(challengesPath);

// Function to generate starter code from solution
function generateStarterCode(solution, functionName = "myFunction") {
  // Extract function signature
  const match = solution.match(/function\s+\w+\s*\(([^)]*)\)/);
  if (match) {
    const params = match[1];
    return `function ${functionName}(${params}) {\n  // Write your code here\n  \n}`;
  }
  return `function ${functionName}() {\n  // Write your code here\n  \n}`;
}

// Update challenges with starter code
const updatedChallenges = {};
for (const category in challenges) {
  updatedChallenges[category] = challenges[category].map((challenge) => {
    if (!challenge.starterCode && challenge.solution) {
      challenge.starterCode = generateStarterCode(challenge.solution);
    }
    // Fix test case format for proper evaluation
    if (challenge.testCases) {
      challenge.testCases = challenge.testCases.map((tc) => {
        if (typeof tc.input === "string" && tc.input.includes("myFunction")) {
          // Extract arguments from myFunction(args)
          const argsMatch = tc.input.match(/myFunction\((.*)\)/);
          if (argsMatch) {
            tc.input = argsMatch[1];
          }
        }
        return tc;
      });
    }
    return challenge;
  });
}

// Generate new content - escape backticks and handle special characters
const newContent = `// This file contains all JavaScript challenges organized by category
export const challenges = ${JSON.stringify(updatedChallenges, null, 2)
  .replace(/\\n/g, "\\n")
  .replace(/\\t/g, "  ")};

export const categories = ${JSON.stringify(categories, null, 2)};
`;

// Write back
fs.writeFileSync(challengesPath, newContent, "utf-8");
console.log("✅ Updated challenges with starter code!");
