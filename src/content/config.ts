import { z, defineCollection } from 'astro:content';

export const collections = {
  post: defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
      title: z.string(),
      date: z.date(),
      cover: image().refine((img) => img.width >= 1200 && img.height >= 600, {
        message: 'Cover images must be at least 1200x600'
      }),
    })
  })
};
