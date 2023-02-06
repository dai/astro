import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  renderers: ['@astrojs/renderer-preact'],
  output: "server",
  adapter: netlify()
});