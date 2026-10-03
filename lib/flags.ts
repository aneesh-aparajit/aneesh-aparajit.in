// Feature flags, read at build time. NEXT_PUBLIC_ values are inlined into the
// client bundle, so changing one needs a rebuild (and a redeploy on Vercel).

const on = (value: string | undefined) => value === "true";

export const flags = {
  // Blogs: the /blogs pages, the Blogs nav cell and the home-page list.
  // Off by default; set NEXT_PUBLIC_ENABLE_BLOGS=true to turn it on.
  blogs: on(process.env.NEXT_PUBLIC_ENABLE_BLOGS),
};
