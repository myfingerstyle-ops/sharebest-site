import { defineCollection, z } from "astro:content";

const reviewCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    categoryLabel: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    rating: z.number().min(1).max(10).optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    recommendedFor: z.array(z.string()).default([]),
    galleryImages: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional()
        })
      )
      .default([]),
    quickFacts: z
      .array(
        z.object({
          label: z.string(),
          value: z.string()
        })
      )
      .default([]),
    scoreBreakdown: z
      .array(
        z.object({
          label: z.string(),
          score: z.number().min(1).max(10),
          note: z.string()
        })
      )
      .default([])
  })
});

const guideCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    categoryLabel: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    keyTakeaways: z.array(z.string()).default([])
  })
});

export const collections = {
  reviews: reviewCollection,
  guides: guideCollection
};
