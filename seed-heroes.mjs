// seed-heroes.mjs
// Run: node seed-heroes.mjs
// Seeds all 129 heroes to Convex in batches of 20

import { readFileSync } from "fs";
import { createRequire } from "module";
import { execSync } from "child_process";

const CONVEX_URL = "https://knowing-lyrebird-561.convex.cloud";
const BATCH_SIZE = 20;

// Read and eval the heroes data
// We'll use tsx to compile and run
const seed = async () => {
  console.log("🚀 Starting hero seed...");

  // Dynamically import heroes via tsx
  const { heroes } = await import("./src/data/heroes.ts");

  console.log(`📦 Found ${heroes.length} heroes to seed`);

  let seeded = 0;

  for (let i = 0; i < heroes.length; i += BATCH_SIZE) {
    const batch = heroes.slice(i, i + BATCH_SIZE);
    
    const res = await fetch(`${CONVEX_URL}/api/mutation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: "heroes:seedHeroes",
        args: { heroes: batch },
        format: "json",
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error(`❌ Batch ${Math.floor(i / BATCH_SIZE) + 1} failed:`, result);
    } else {
      seeded += batch.length;
      console.log(`✅ Batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(heroes.length / BATCH_SIZE)} — ${seeded}/${heroes.length} heroes seeded`);
    }
  }

  console.log(`\n🎉 Done! ${seeded} heroes in Convex.`);
};

seed().catch(console.error);
