import { defineCollection, z } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      readingTime: z.number(),
      lang: z.enum(["es", "en"]),
      group: z.string(), 
      cover: z.string()
    })
  }),


  project: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      lang: z.enum(["es", "en"]),
      group: z.string(), 
      cover: z.string()
    })
  })
};
