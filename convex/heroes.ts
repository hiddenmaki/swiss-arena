import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("heroes").collect();
  },
});

export const getById = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("heroes")
      .withIndex("by_hero_id", (q) => q.eq("id", args.id))
      .first();
  },
});

export const seedHeroes = mutation({
  args: {
    heroes: v.array(
      v.object({
        id: v.string(),
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
      })
    ),
  },
  handler: async (ctx, args) => {
    for (const hero of args.heroes) {
      // Check if exists
      const existing = await ctx.db
        .query("heroes")
        .withIndex("by_hero_id", (q) => q.eq("id", hero.id))
        .first();

      if (!existing) {
        await ctx.db.insert("heroes", hero);
      }
    }
    return "Seeded successfully!";
  },
});
