import { z, defineCollection } from 'astro:content';

export const postSchema = z
  .object({
    language: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    updatedDate: z.string(),
  })
  .strict();

const postCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  posts: postCollection,
};
