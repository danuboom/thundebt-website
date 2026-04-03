// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";

// https://astro.build/config
export default defineConfig({
  site: isGitHubPages ? "https://danuboom.github.io" : "https://thundebt.com",
  base: isGitHubPages ? "/thundebt-website" : "/",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Noto Sans Thai",
      cssVariable: "--font-noto-sans-thai",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
