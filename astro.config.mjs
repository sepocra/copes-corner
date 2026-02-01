import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/static";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://copescorner.sepocra.com",
  integrations: [mdx(), sitemap()],
  adapter: netlify()
});
