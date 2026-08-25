#!/usr/bin/env node
/**
 * Locale parity gate. Fails the build when a production locale has missing
 * keys, stray extra keys, empty strings, or interpolation variables that
 * don't match the English source. A missing translation must never ship
 * silently as English.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = "en";
const LOCALES = ["en", "sv", "da", "nb"];

const load = (l) => JSON.parse(readFileSync(join(root, "messages", `${l}.json`), "utf8"));

function flatten(obj, prefix = "", out = {}) {
  for (const [k, v] of Object.entries(obj)) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) flatten(v, key, out);
    else out[key] = v;
  }
  return out;
}

const vars = (s) =>
  typeof s === "string" ? [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",") : "";

const source = flatten(load(SOURCE));
const sourceKeys = Object.keys(source);
const problems = [];

for (const locale of LOCALES) {
  const flat = flatten(load(locale));
  const keys = Object.keys(flat);

  for (const k of sourceKeys) {
    if (!(k in flat)) problems.push(`${locale}: missing key  ${k}`);
    else if (typeof flat[k] !== "string" || flat[k].trim() === "")
      problems.push(`${locale}: empty value  ${k}`);
    else if (vars(flat[k]) !== vars(source[k]))
      problems.push(
        `${locale}: interpolation mismatch  ${k}  (expected {${vars(source[k])}}, got {${vars(flat[k])}})`
      );
  }
  for (const k of keys) if (!(k in source)) problems.push(`${locale}: extra key  ${k}`);
}

if (problems.length) {
  console.error(`\nLocale parity check FAILED (${problems.length} problem(s)):\n`);
  for (const p of problems) console.error("  " + p);
  console.error("");
  process.exit(1);
}

console.log(`Locale parity OK — ${LOCALES.length} locales x ${sourceKeys.length} keys.`);
