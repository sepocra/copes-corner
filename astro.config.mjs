import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://sepocra.github.io'
    : 'https://copescorner.sepocra.com',
  base: isGitHubPages ? '/copes-corner' : undefined,
  output: "static",
  integrations: [mdx()],
  adapter: isGitHubPages ? undefined : netlify({
    imageCDN: false,
  }),
});