import type { Loader } from "astro/loaders";
import { readdir, readFile } from "node:fs/promises";
import { site } from "../lib/site";
import { url } from "../utils/url";

const placeholders = site.placeholders;

// Maps each legal document's file id to the route slug it is published under.
const slugByFile: Record<string, string> = {
  "politica-de-privacidad": "privacidad",
  "terminos-y-condiciones": "terminos",
  "almacenamiento-y-datos": "datos",
  permisos: "permisos",
  "licencia-y-codigo-abierto": "licencia",
  "descargo-de-responsabilidad": "responsabilidad",
  "preguntas-frecuentes": "preguntas-frecuentes",
};

const slugs = new Set(Object.values(slugByFile));

function resolveTarget(target: string): string | null {
  const clean = target
    .replace(/^\.\//, "")
    .replace(/-\//g, "-")
    .replace(/\.md$/i, "");
  if (slugs.has(clean)) return clean;
  if (slugByFile[clean]) return slugByFile[clean];
  const last = clean.split("/").filter(Boolean).pop();
  if (last && slugs.has(last)) return last;
  if (last && slugByFile[last]) return slugByFile[last];
  return null;
}

function resolveLinks(md: string) {
  return md.replace(/(\[[^\]]*\]\()([^)]+)(\))/g, (full, pre, rawTarget, post) => {
    const [path, hash = ""] = rawTarget.split("#");
    const slug = resolveTarget(path);
    if (!slug) {
      const internal = /^(\.{1,2}\/|\/)/.test(path);
      return internal ? pre.slice(1, -2) : full;
    }
    return `${pre}${url(`/${slug}`)}${hash ? `#${hash}` : ""}${post}`;
  });
}

function process(raw: string) {
  let out = raw;
  for (const [key, real] of Object.entries(placeholders)) {
    out = out.split(`{{${key}}}`).join(real);
  }
  return resolveLinks(out.replace(/SimpleStock/g, site.name));
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
