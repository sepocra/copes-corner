import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages
    ? 'https://sepocra.github.io'
    : 'https://copescorner.sepocra.com',
  base: isGitHubPages ? '/copes-corner' : undefined,
  output: "static",
  integrations: [mdx()],
});