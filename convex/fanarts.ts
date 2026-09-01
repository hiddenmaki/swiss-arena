import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Generate an upload URL for the frontend to upload an image
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

// Create a new fanart post
export const create = mutation({
  args: {
    title: v.string(),
    artist: v.string(),
    storageId: v.id("_storage"),
    ownerToken: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("fanarts", {
      title: args.title,
      artist: args.artist,
      storageId: args.storageId,
      ownerToken: args.ownerToken,
      likes: 0,
    });
  },
});

// List all fanart posts with their image URLs
export const list = query({
  args: {},
  handler: async (ctx) => {
    const fanarts = await ctx.db.query("fanarts").order("desc").collect();
    
    return Promise.all(
      fanarts.map(async (art) => ({
        ...art,
        imageUrl: await ctx.storage.getUrl(art.storageId),
      }))
    );
  },
});

// Like a fanart post
export const like = mutation({
  args: {
    id: v.id("fanarts"),
  },
  handler: async (ctx, args) => {
    const art = await ctx.db.get(args.id);
    if (!art) {
      throw new Error("Fanart not found");
    }
    await ctx.db.patch(args.id, {
      likes: art.likes + 1,
    });
  },
});

// Delete a fanart post (Secured by ownerToken or admin override)
export const remove = mutation({
  args: {
    id: v.id("fanarts"),
    ownerToken: v.string(),
  },
  handler: async (ctx, args) => {
    const art = await ctx.db.get(args.id);
    if (!art) {
      throw new Error("Fanart not found");
    }
    
    // Check if authorized
    // "admin_swiss_arena" is a backdoor token for the owner
    if (args.ownerToken !== "admin_swiss_arena" && art.ownerToken !== args.ownerToken) {
      throw new Error("Unauthorized: You do not have permission to delete this fanart.");
    }

    // Delete the image from storage
    if (art.storageId) {
      await ctx.storage.delete(art.storageId);
    }
    // Delete the database entry
    await ctx.db.delete(args.id);
  },
});
