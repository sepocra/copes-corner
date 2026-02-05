import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/static";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isGitHubPages 
    ? 'https://sepocra.github.io' 
    : process.env.SITE || "https://copescorner.sepocra.com",
  base: isGitHubPages ? '/copes-corner' : undefined,
  output: "static",
  adapter: isGitHubPages ? undefined : netlify()
});
