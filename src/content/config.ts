import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    publishDate: z.date(),
  }),
});
const quotesCollection = defineCollection({
  schema: z.object({
    quote: z.string(),
    hasLink: z.boolean(),
    link: z.array(z.string()),
  }),
});
const booksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    review: z.boolean(),
    dateFinished: z.date().optional(),
    OLID: z.string(),
    rating: z.number(),
  }),
});
const shrineCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    pictureURL: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  "blog": blogCollection,
  "quotes": quotesCollection,
  "books": booksCollection,
  "shrine": shrineCollection,
};
