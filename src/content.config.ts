import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const news = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/news",
  }),
  sschema: baseSchema.extend({
      date: z.coerce.date(),
      featured: z.boolean().default(false),
      category: z.string().default("Новини"),
      eventDate: z.coerce.date().optional(),
      eventEndDate: z.coerce.date().optional(),
      location: z.string().optional(),
      heroImage: z.string().optional(),
      ogImage: z.string().optional(),
      documents: z.array(
        z.object({
          title: z.string(),
          url: z.string(),
        })
      ).default([]),
      author: z.string().default("Черни Вит"),
      tags: z.array(z.string()).default([]),
})
});

const landmarks = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/landmarks",
  }),
  schema: baseSchema.extend({
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
  }),
});

const mahali = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/mahali",
  }),
  schema: baseSchema.extend({
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = {
  news,
  landmarks,
  mahali,
};