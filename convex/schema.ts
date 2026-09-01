import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  heroes: defineTable({
    id: v.string(), // "nakroth", "flowborn-mage", etc.
    name: v.string(),
    title: v.string(),
    role: v.string(),
    difficulty: v.string(),
    tier: v.string(),
    lore: v.string(),
    stats: v.object({
      damage: v.number(),
      mobility: v.number(),
      durability: v.number(),
      utility: v.number(),
      difficulty: v.number(),
    }),
    abilities: v.array(
      v.object({
        name: v.string(),
        description: v.string(),
        cooldown: v.string(),
        manaCost: v.string(),
      })
    ),
    tips: v.array(v.string()),
    counters: v.array(v.string()),
    synergies: v.array(v.string()),
    lane: v.optional(v.string()),
  }).index("by_hero_id", ["id"]),
  fanarts: defineTable({
    title: v.string(),
    artist: v.string(),
    storageId: v.id("_storage"),
    likes: v.number(),
    ownerToken: v.optional(v.string()),
  }),
});
