import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

// Clear all heroes from the database
// Run with: npx convex run seed:clearHeroes
export const clearHeroes = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("heroes").collect();
    for (const hero of existing) {
      await ctx.db.delete(hero._id);
    }
    return `Deleted ${existing.length} heroes.`;
  },
});
