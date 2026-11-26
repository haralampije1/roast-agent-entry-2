import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = "/output";
const entryPath = `${outputDir}/entry.txt`;

// The winning roast: fresh dev humor, tight, self-deprecating, no stock jokes
// Avoids stock jokes about hallucinations, refusals, confident wrong answers
const roast = "My agent's so helpful it rewrote my grocery list into a GraphQL schema—now I need a resolver just to buy milk.";

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(entryPath, roast, "utf-8");
  console.log(`Entry written to ${entryPath}`);
  console.log(`Length: ${roast.length} characters`);
} catch (err) {
  console.error("Failed to write entry:", err);
  process.exit(1);
}
