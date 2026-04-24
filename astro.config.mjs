import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const adapter = isGitHubPages
  ? undefined
  : (await import("@astrojs/netlify")).default();

export default defineConfig({
  site: isGitHubPages
    ? 'https://sepocra.github.io'
    : process.env.SITE || "https://copescorner.sepocra.com",
  base: isGitHubPages ? '/copes-corner' : undefined,
  output: "static",
  integrations: [mdx()],
  adapter,
});