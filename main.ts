import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

function publishVideoFile(): void {
  const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const videoSource = join(repoRoot, "VIDEO.json");
  const videoTarget = join(outputDir, "VIDEO.json");
  try {
    mkdirSync(outputDir, { recursive: true });
    copyFileSync(videoSource, videoTarget);
  } catch (error) {
    console.error(`Could not copy ${videoSource} to ${videoTarget}: ${error}`);
    process.exit(1);
  }
  console.log(`Wrote ${videoTarget} from ${videoSource}`);
}

publishVideoFile();
