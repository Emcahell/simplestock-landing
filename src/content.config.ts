import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { legalLoader } from "./loaders/legal";

const legal = defineCollection({
  loader: legalLoader(),
  schema: z.object({}),
});

export const collections = { legal };
