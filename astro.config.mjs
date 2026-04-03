// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
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
