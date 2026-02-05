import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/static";

export default defineConfig({
//  site: process.env.SITE || "https://copescorner.sepocra.com",
//  output: "static",
//  adapter: netlify()
site: 'https://sepocra.github.io', 
base: '/copes-corner'
});
