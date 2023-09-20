import { defineCollection, z } from "astro:content";

const pages = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { pages };