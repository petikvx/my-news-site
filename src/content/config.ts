import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    author: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  articles: articlesCollection,
};