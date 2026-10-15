import type { Loader } from "astro/loaders";
import { readdir, readFile } from "node:fs/promises";
import { site } from "../lib/site";

const placeholders = site.placeholders;

function process(raw: string) {
  let out = raw;
  for (const [key, real] of Object.entries(placeholders)) {
    out = out.split(`{{${key}}}`).join(real);
  }
  return out.replace(/SimpleStock/g, site.name);
}

/**
 * Loads the markdown documents from the top-level `legal/` directory into the
 * `legal` content collection, replacing the `{{PLACEHOLDER}}` markers with the
 * real values before rendering.
 */
export function legalLoader(): Loader {
  return {
    name: "simplestock-legal-loader",
    load: async ({ store, parseData, generateDigest, renderMarkdown }) => {
      const dir = new URL("../../legal/", import.meta.url);
      const files = await readdir(dir);

      for (const file of files) {
        if (!file.endsWith(".md") || file.toLowerCase() === "readme.md") continue;

        const fileURL = new URL(file, dir);
        const filePath = `legal/${file}`;
        const id = file.replace(/\.md$/i, "");
        const body = process(await readFile(fileURL, "utf-8"));

        const data = await parseData({ id, data: {}, filePath });
        const rendered = await renderMarkdown(body, { fileURL });

        store.set({ id, data, body, rendered, digest: generateDigest(body), filePath });
      }
    },
  };
}
