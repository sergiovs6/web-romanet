import { defineCollection, z } from 'astro:content';

// Pages collection schema
const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'es', 'it', 'gr']),
    title: z.string(),
    description: z.string().optional(),
    tagline: z.string().optional(),
  }),
});

// News collection schema
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.enum(['en', 'es', 'it', 'gr']),
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    category: z.string(),
    image: z.string().optional(),
    author: z.string().optional(),
  }),
});

// Partners collection schema
const partnersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    country: z.string(),
    logo: z.string().optional(),
    website: z.string().url().optional(),
    description_en: z.string(),
    description_es: z.string(),
    description_it: z.string(),
    description_gr: z.string(),
    body_en: z.string().optional(),
    body_es: z.string().optional(),
    body_it: z.string().optional(),
    body_gr: z.string().optional(),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'news': newsCollection,
  'partners': partnersCollection,
};
